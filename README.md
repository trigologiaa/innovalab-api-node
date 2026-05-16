# InnovaLab - API Backend

Backend service for the InnovaLab platform (Team 2), deployed in Node.js using TypeScript, under a modular architecture and natively configured with ES Modules (ESM).

The execution environment is fully containerized, meaning **you do not need to install any software locally** to run the application.

---

## Prerequisites (Minimum)

To clone and run this project as cleanly as possible, you will need:

1. **Docker**.
2. **Docker Compose**.
3. **Git**.

---

## Initialization with Docker

### Clone the repository

```sh
# Clone the repository
git clone <repo>

# Navigate to the repository directory
cd backend
```

### Configure environment variables

The container requires certain variables in memory to start. You must create a local file from the template.

```sh
cp .env.example .env
```

Open the newly created `.env` file and define the required values, for example, `PORT=3000`.

### Spin up the ecosystem

Run this in the root directory of the project:

```sh
# Run the application in the background forcing the build
docker compose up -d --build
```

## Useful Docker Compose commands

| **Action**          | **Command**              | **Description**                                                         |
| ------------------- | ------------------------ | ----------------------------------------------------------------------- |
| **View logs**       | `docker compose logs -f` | Displays console output and Express requests in real time               |
| **Check status**    | `docker compose ps`      | Verifies that the container is running and the port is correctly mapped |
| **Restart**         | `docker compose restart` | Safely restarts the application services                                |
| **Stop / Shutdown** | `docker compose down`    | Stops and removes the container, freeing up system memory               |

---

## Using the automation script

To run the automation script, you can use `build.sh` on Linux/MacOS or `build.ps1` on Windows.

### On Linux/MacOS

You must grant execution permissions to the file:

```sh
chmod +x build.sh
```

Run the script:

```sh
./build.sh
```

To stop the execution and free up the port being used, press **CTRL + C**.

### On Windows

You must grant execution permissions to the file:

```sh
PowerShell -ExecutionPolicy Bypass -File .\build.sh
```

Run the script:

```sh
./build.ps1
```

To stop the execution and free up the port being used, press **CTRL + C**.

---

## Local development environment (optional)

To develop the project and run tests or the linter directly on your host machine (without using Docker), Node.js v24.15.0 or higher is required. Follow these steps:

### Local dependency Initialization

```sh
npm install
```

### Available scripts in `package.json`

- `npm run dev`: Starts the local development server using `tsx` with continuous _hot-reload_ upon saving files.
- `npm run format`: Applies strict formatting across the entire codebase using **Prettier**.
- `npm run lint`: Validates type safety with `tsc` and analyzes code quality with **ESLint**.
- `npm run test`: Runs the unit test suite interactively with **Vitest**.
- `npm run coverage`: Generates a complete mathematical report of code coverage in the console.

---

## Main technology stack

- **Runtime**: Node.js v24.15.0 (Alpine Linux for the production container).
- **Framework**: Express v5 (with native routing management).
- **Security and logs**: `helmet` for HTTP header protection, `cors` for cross-origin access control, and `morgan` as the request logger.
- **Linter and formatter**: ESLint v10 (strict `typescript-eslint` + `eslint-plugin-perfectionist`) coupled with Prettier v3.
- **Testing**: Vitest v4 with native ES Modules support and code coverage reports (`@vitest/coverage-v8`).
