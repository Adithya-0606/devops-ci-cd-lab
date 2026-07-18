pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'pwd'
                sh 'ls -la'
                sh 'docker --version'
                sh 'docker build -t devops-ci-cd-app:latest ./app'
            }
        }

        stage('List Images') {
            steps {
                sh 'docker images'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}