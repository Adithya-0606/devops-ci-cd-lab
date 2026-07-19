# 🚀 Production-Style CI/CD Automation Pipeline using Jenkins, Docker & Render

A production-style Continuous Integration and Continuous Deployment (CI/CD) pipeline that automates building, testing, containerizing, publishing, and deploying applications with minimal manual intervention.

The project demonstrates how modern software teams automate software delivery using **GitHub Webhooks, Jenkins, Docker, Docker Hub, Render, and Discord notifications**.

---

# 📌 Problem Statement

In many student and small-scale projects, deployment is performed manually.

Typical deployment involves:

- Pulling the latest code
- Installing dependencies
- Running tests manually
- Building Docker images
- Restarting containers
- Verifying if the application is running
- Informing the team manually

This process is:

- Time consuming
- Error prone
- Difficult to scale
- Inconsistent across environments

This project eliminates those manual steps by creating a fully automated CI/CD pipeline.

---

# 🎯 Objective

The objective of this project is to automate the complete software delivery lifecycle.

Whenever new code is pushed to GitHub, the pipeline automatically:

- Detects the new commit
- Downloads the latest source code
- Installs dependencies
- Executes tests
- Builds a Docker image
- Versions the image using Git commit SHA
- Pushes the image to Docker Hub
- Triggers deployment on Render
- Performs health checks
- Sends deployment notifications to Discord

No manual deployment is required.

---

# 🏗 System Architecture

```
Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    │ Webhook
    ▼
Jenkins
    │
    ├── Checkout Source Code
    ├── Install Dependencies
    ├── Run Tests
    ├── Build Docker Image
    ├── Tag Image (Git SHA)
    ├── Push Docker Image
    │
    ▼
Docker Hub
    │
    ▼
Render
    │
    ▼
Deploy Latest Image
    │
    ▼
Health Check
    │
    ▼
Discord Notification
```

---

# ⚙ Features

## Continuous Integration

- GitHub Webhook Trigger
- Automatic source code checkout
- Dependency installation
- Automated testing
- Version generation using Git commit SHA

---

## Continuous Deployment

- Docker image creation
- Docker Hub publishing
- Automatic Render deployment
- Health verification
- Deployment status notification

---

## DevOps Features

- Jenkins Declarative Pipeline
- Docker Containerization
- Docker Compose
- Jenkins Credentials Management
- Bash Automation Scripts
- Discord Webhook Integration
- Version-controlled Docker Images

---

# 📁 Project Structure

```
.
├── app/
│   ├── package.json
│   ├── server.js
│   └── Dockerfile
│
├── scripts/
│   ├── deploy.sh
│   ├── rollback.sh
│   ├── cleanup.sh
│   ├── notify.sh
│   └── healthcheck.sh
│
├── docker/
│
├── Jenkinsfile
├── docker-compose.yml
└── README.md
```

---

# 🚀 Pipeline Workflow

## Step 1

Developer pushes code to GitHub.

↓

## Step 2

GitHub Webhook immediately triggers Jenkins.

↓

## Step 3

Jenkins downloads the latest source code.

↓

## Step 4

Dependencies are installed.

↓

## Step 5

Automated tests are executed.

↓

## Step 6

Docker image is built.

↓

## Step 7

Image is tagged using:

```
latest
```

and

```
Git Commit SHA
```

Example:

```
devops-ci-cd-app:latest

devops-ci-cd-app:9616ece
```

↓

## Step 8

Image is pushed to Docker Hub.

↓

## Step 9

Render receives a Deploy Hook request.

↓

## Step 10

Render pulls the newest Docker image.

↓

## Step 11

Application is deployed.

↓

## Step 12

Health endpoint is verified.

```
GET /health
```

↓

## Step 13

Discord notification is sent.

---

# 🛠 Technologies Used

## Version Control

- Git
- GitHub

## CI/CD

- Jenkins
- GitHub Webhooks

## Containerization

- Docker
- Docker Compose
- Docker Hub

## Deployment

- Render

## Backend

- Node.js
- Express.js

## Automation

- Bash

## Notifications

- Discord Webhooks

---

# 🔐 Security

Sensitive information is never stored in the repository.

Jenkins Credentials securely store:

- Docker Hub Credentials
- Discord Webhook URL
- Render Deploy Hook

---

# 📈 Benefits

- Zero manual deployment
- Consistent application environments
- Faster software delivery
- Automatic deployment verification
- Version-controlled Docker images
- Easily reproducible deployments
- Reduced deployment failures

---

# ♻ Reusability

One of the primary goals of this project is reusability.

The pipeline has been designed so that it can be reused in almost any backend or full-stack application.

Instead of creating a new CI/CD pipeline for every project, only a few configuration values need to be updated.

---

## For another Node.js project

Simply replace:

- Application source code
- Docker image name
- Container name
- Health endpoint
- Port number

Everything else remains unchanged.

---

## For a Spring Boot project

Only change:

Dockerfile

```
FROM eclipse-temurin:21
```

Health endpoint

```
/actuator/health
```

Port

```
8080
```

The Jenkins pipeline remains exactly the same.

---

## For Python Flask/FastAPI

Only update:

Dockerfile

Dependencies

Health endpoint

Everything else is reused.

---

# 🔄 Files That Rarely Change

The following files can be copied directly into any future project.

```
Jenkinsfile

scripts/deploy.sh

scripts/notify.sh

scripts/rollback.sh

scripts/cleanup.sh

scripts/healthcheck.sh
```

Usually, only small configuration changes are required.

---

# 🔧 Configuration Required for New Projects

When reusing this template, update only:

- Docker image name
- Container name
- Application port
- Health check endpoint
- Docker Hub repository
- Render Deploy Hook
- Discord Webhook

No major pipeline changes are required.

---

# 💼 Real-World Relevance

This project follows the same overall workflow used in modern software teams.

```
Developer

↓

GitHub

↓

CI Server

↓

Tests

↓

Docker Build

↓

Container Registry

↓

Deployment

↓

Health Check

↓

Team Notification
```

While enterprise environments may use Kubernetes, AWS, Azure, or GitHub Actions, the underlying CI/CD principles remain the same.

---

# 🎓 Learning Outcomes

This project demonstrates practical experience with:

- Jenkins Pipelines
- Continuous Integration
- Continuous Deployment
- Docker
- Docker Compose
- GitHub Webhooks
- Docker Hub
- Render Deployment
- Bash Automation
- Health Checks
- Deployment Notifications
- Secure Credential Management
- Production-style Software Delivery

---

# 📌 Future Enhancements

- Automatic Rollback
- Multi-stage Docker Builds
- Prometheus Monitoring
- Grafana Dashboards
- Kubernetes Deployment
- Blue-Green Deployment

---

# 👨‍💻 Author

Adithya A

Backend & Full Stack Developer
