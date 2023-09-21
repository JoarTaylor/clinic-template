pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Delivery/Deployment') {
            steps {
                echo 'Delivery/Deployment...'
            }
        }
        stage ('Static Analysis') {
        steps {
            sh ' ./node_modules/eslint/bin/eslint.js -f checkstyle src > eslint.xml'
        }
        post {
            always {
                recordIssues enabledForFailure: true, aggregatingResults: true, tools: checkStyle(pattern: 'eslint.xml')
            }
        }
    }
    }
}
