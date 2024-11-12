## 1. Base Image Selection
- The containers are built using the `node:14` image, which is based on Alpine Linux for its lightweight nature.
- MongoDB uses the `mongo:4.4.1` image.

## 2. Dockerfile Instructions
Two distinct Dockerfiles are created: one for the Client and one for the Backend.

### Client Dockerfile
- Uses a two-stage process with `node:16-alpine3.16` for building and `node:14` for production.
- Installs only production dependencies, cleans up temporary files, copies application files, compiles the app, and prepares it for deployment.

### Backend Dockerfile
- Based on `node:14`, installs production dependencies, copies files, and sets the app for production, exposing port 5000.

## 3. Networking in Docker Compose
The `docker-compose.yml` defines three services:
- **yolobackend** (Backend)
- **yoloclient** (Client)
- **mongodb_data** (MongoDB)

All services are linked via a bridge network `appnet`, with port mappings:
- Backend: `5000:5000`
- Client: `3000:3000`
- MongoDB: `27017:27017`

## 4. Volume Setup in Docker Compose
- A volume `mongodata` is created to persist MongoDB data, ensuring data remains intact even if the container is stopped or deleted.

## 5. Git Workflow
1. Fork and clone the repository.
2. Add Dockerfiles for the client and backend.
3. Commit and push changes to GitHub.
4. Build Docker images using `docker-compose build`.
5. Push the images to Docker registry with `docker-compose push`.
6. Deploy containers using `docker-compose up`.
7. Create an `explanation.md` file to document the process, referencing commit messages in the repository.
