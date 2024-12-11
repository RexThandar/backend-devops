pipeline {
    agent any
    environment {
        USERNAME = 'Felipe'
    }
    stages {
        stage('Build - instalacion dependencias') {
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            stages {
                stage('Instalacion dependencias') {
                    steps {
                        sh 'npm install'
                    }
                }
                stage('build - Pruebas unitarias') {
                    steps {
                        sh 'npm run test'
                    }
                }
                stage('build - build de la aplicacion') {
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
    }
    post {
        always {
            // Pasos que se ejecutan siempre después de cualquier etapa
            echo 'Pipeline terminado.'
        }
        
        success {
            // Pasos que se ejecutan solo si el pipeline fue exitoso
            echo 'Pipeline exitoso.'
        }

        failure {
            // Pasos que se ejecutan si el pipeline falla
            echo 'Pipeline fallido.'
        }
    }
}
