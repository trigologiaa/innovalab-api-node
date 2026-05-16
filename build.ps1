$ErrorActionPreference = "Stop"

$portProcess = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($portProcess) {
    Write-Host "Releasing port 3000..." -ForegroundColor Yellow
    Stop-Process -Id $portProcess.OwningProcess -Force -ErrorAction SilentlyContinue
}
docker compose down 2>$null

npm install
npm run format
npm run lint -- --fix
npm run test:run

docker compose up -d --build

try {
    docker compose logs -f
}
finally {
    Write-Host "`nTurning off container..." -ForegroundColor Yellow
    docker compose down
}
