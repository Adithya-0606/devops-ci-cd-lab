pipeline {
    agent any

    environment {
        DISCORD_WEBHOOK = credentials('discord-webhook')
    }


    stages {

        stage('Get Version') {
            steps {
                script {
                    env.IMAGE_TAG = sh(
                        script: "git rev-parse --short HEAD",
                        returnStdout: true
                    ).trim()

                    echo "Image Tag: ${env.IMAGE_TAG}"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('app') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('app') {
                    sh 'npm test'
                }
            }
        }


        stage('Build Docker Image') {
            steps {
                sh "docker build -t devops-ci-cd-app:${IMAGE_TAG} ./app"
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                        docker tag devops-ci-cd-app:${IMAGE_TAG} $DOCKER_USER/devops-ci-cd-lab:${IMAGE_TAG}

                        docker tag devops-ci-cd-app:${IMAGE_TAG} $DOCKER_USER/devops-ci-cd-lab:latest

                        docker push $DOCKER_USER/devops-ci-cd-lab:${IMAGE_TAG}

                        docker push $DOCKER_USER/devops-ci-cd-lab:latest

                        docker logout
                    '''
                }
            }
        }


        stage('Deploy to Render') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'render-deploy-hook',
                        variable: 'RENDER_HOOK'
                    )
                ]) {
                    sh '''
                        echo "Triggering Render deployment..."
                        curl -X POST "$RENDER_HOOK"
                    '''
                }
            }
        }


        stage('Deploy Container') {
            steps {
                sh '''
                    docker stop devops-app || true
                    docker rm devops-app || true

                    docker run -d \
                    --name devops-app \
                    -p 3000:3000 \
                    devops-ci-cd-app:${IMAGE_TAG}
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'docker ps'
            }
        }

        stage('Show Version') {
            steps {
                echo "Running Image Version: ${IMAGE_TAG}"
            }
        }


        stage('Health Check') {
            steps {
                sh '''
                    echo "Waiting for application..."
                    sleep 5

                    curl --fail http://host.docker.internal:3000/health
                '''
            }
        }


    }

    post {
        success {
            sh "./scripts/notify.sh success"
        }

        failure {
            sh "./scripts/notify.sh failure"
        }
    }
}