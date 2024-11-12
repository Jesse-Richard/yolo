
This markdown file summarizes the key components of the Yolomy project and provides a step-by-step guide to deploying the application on Kubernetes.
For more information, see: `explanation.md`

# Project Summary: Yolomy Deployment on Kubernetes

This project focuses on deploying and managing the *Yolomy* full-stack application on Kubernetes using Minikube. *Yolomy* is an E-commerce platform that allows users to create products for an online store. The project involves containerizing the application with Docker and deploying it using Kubernetes.

## Key Components

### 1. Prerequisites
- Ensure Minikube is installed and running on your local machine.
- Kubernetes configuration files are located in the `k8s/` directory.

### 2. Kubernetes Configuration Files
The `k8s/` directory contains the necessary configuration files for deploying the client and backend components of the application. These include:

- **Client Deployment (`frontend.yaml`)**:
  - Defines the deployment for the client (frontend) application.
  - **Replicas**: Ensures a single instance of the client pod is running.
  - **Containers**: Uses the Docker image `jesserichard/yolo-client:1.0`, exposes port 3000, and specifies CPU and memory resources.

- **Backend Deployment (`backend-deployment.yaml`)**:
  - Configures the backend deployment.
  - **Containers**: Deploys the backend Docker image (e.g., `jesserichard/yolo-backend:1.0`), exposes port 5000 for frontend interaction.
  - **ClusterIP**: Exposes the backend service internally within the Kubernetes cluster.
  - **Selector**: Ensures the backend service targets the appropriate deployment.

- **Backend Service (`backend-service.yaml`)**:
  - Exposes the backend service to the Kubernetes cluster.
  - **ClusterIP**: Makes the backend accessible internally for communication with the client.

- **StatefulSet MongoDB Deployment (`statefuldb.yaml`)**:
  - Defines the MongoDB deployment as a StatefulSet.
  - **Replicas**: Ensures one replica of the MongoDB pod.
  - **Containers**: Deploys MongoDB and exposes port 27017.
  - **ClusterIP**: Provides a stable, internal endpoint for MongoDB that other services can connect to.

### 3. Steps to Deploy

1. **Start Minikube**:
   Ensure Minikube is running by checking the status:
   `minikube status`

2. **Kubernetes**:
    Apply the kubernetes manifests in the k8s/ directory as follows:
    `kubectl apply -f k8s/`
