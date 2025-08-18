pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm run unit-test'
            }
        }
        stage('Integration Tests') {
            steps {
                sh 'npm run integration-test'
            }
        }
    }
}
