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
                    // Autenticarse en el registro de Nexus
                    sh 'docker login -u admin -p aquila777 http://localhost:8082'

                    // Construir la imagen Docker
                    sh 'docker build -t backend-devops:latest .'

                    // Etiquetar la imagen para el registro de Nexus
                    sh 'docker tag backend-devops:latest localhost:8082/backend-devops:latest'

                    // Subir la imagen al registro de Nexus
                    sh 'docker push localhost:8082/backend-devops:latest'

                    // Cerrar sesión por seguridad (opcional)
                    sh 'docker logout http://localhost:8082'
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
