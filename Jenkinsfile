pipeline {
    agent any
    stages {
        stage('Dependencies Build') {
            steps {
                echo 'npm install'
            }
        }
        stage('Proyect Build') {
            steps {
                echo 'npm run build'
            }
        }
    }
}