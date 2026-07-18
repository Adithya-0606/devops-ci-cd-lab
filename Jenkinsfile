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
            sh '''
            curl -H "Content-Type: application/json" \
            -X POST \
            -d "{\"content\":\"✅ Build #${BUILD_NUMBER} succeeded!\\nProject: ${JOB_NAME}\\nCommit: ${GIT_COMMIT}\"}" \
            $DISCORD_WEBHOOK
            '''
        }

        failure {
            sh '''
            curl -H "Content-Type: application/json" \
            -X POST \
            -d "{\"content\":\"❌ Build #${BUILD_NUMBER} failed!\\nProject: ${JOB_NAME}\"}" \
            $DISCORD_WEBHOOK
            '''
        }

    }
}