pipeline {
    agent any
    stages {
        stage('Dependencies Build') {
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            stages {
                stage('Install Dependencies') {
                    steps {
                        sh 'npm install'
                        echo 'Dependencies installed'
                    }
                }
                stage('Proyect Build') {
                    steps {
                        sh 'npm run build'
                        echo 'Proyect builded'
                    }
                }
            }
        }    
    }
}