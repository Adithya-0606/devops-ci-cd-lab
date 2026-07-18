pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-ci-cd-app:latest ./app'
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
                        devops-ci-cd-app:latest
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful!'
        }

        failure {
            echo 'Deployment Failed!'
        }
    }
}