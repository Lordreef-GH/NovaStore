# NovaStore

A simple React product listing app built with Vite and deployed via Docker, automated with Jenkins.

## Quick start (local)

```powershell
# From the NovaStore folder
npm install
npm run dev
```

Open http://localhost:5173

## Docker

```powershell
# Build and run
docker compose up -d --build
# Stop
docker compose down
```

App runs on http://localhost:8082

## Jenkins CI/CD
Pipeline stages:
- Checkout
- Install & Build (Node 20 in Docker)
- Docker Build (image `novastore:ci`)
- Deploy (docker compose up -d)

On success, app is available at http://localhost:8082.

## Repo
Intended to be pushed to https://github.com/Lordreef-GH/NovaStore.git
