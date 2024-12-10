pipeline {
    agent any
    
    environment {
        GIT_REPO_URL = 'https://github.com/RexThandar/backend-devops.git'
        GIT_BRANCH = 'main'
    }
    
    stages {
        stage('Checkout') {
            steps {
                script {
                    git url: GIT_REPO_URL, branch: GIT_BRANCH
                }
            }
        }
        
        stage('Build General') {
        //     agent {
        //         docker {
        //             image 'node:22-alpine'
        //             reuseNode true
        //         }
        //     }

            stages {
                stage('Install') {
                    steps {
                        sh 'npm install'
                        echo 'Instalando dependencias...'
                    }
                }

                stage('Build') {
                    steps {
                        sh 'npm run build'
                        echo 'Construyendo la aplicación...'
                    }
                }

                stage('Test') {
                    steps {
                        echo 'Ejecutando pruebas...'
                    }
                }

                stage('Deploy') {
                    steps {
                        echo 'Desplegando la aplicación...'
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
