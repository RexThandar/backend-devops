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
        stage("delivery - subida a nexus") {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'registry', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh """
                            echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin http://localhost:8082
                            docker build -t backend-devops .
                            docker tag backend-devops:latest localhost:8082/backend-devops:latest
                            docker push localhost:8082/backend-devops:latest
                        """
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
