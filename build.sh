#!/usr/bin/env bash

set -e
set -x

fuser -k 3000/tcp || true
docker compose down || true

npm install
npm run format
npm run lint -- --fix
npm run test:run

docker compose up -d --build

trap 'docker compose down; exit 0' INT

docker compose logs -f
