pipeline {
    agent any  // Puede ser 'any' para usar cualquier nodo disponible, o un nodo específico
    
    environment {
        // Define las variables de entorno necesarias, por ejemplo, para las credenciales
        GIT_REPO_URL = 'https://github.com/RexThandar/backend-devops.git'
        GIT_BRANCH = 'main'
    }
    
    stages {
        stage('Checkout') {
            steps {
                script {
                    // Clona el repositorio en el workspace de Jenkins
                    git url: GIT_REPO_URL, branch: GIT_BRANCH
                }
            }
        }
        
        stage('Build') {
            steps {
                // Aquí puedes agregar tus pasos de compilación o ejecución
                echo 'Ejecutando el build...'
            }
        }

        stage('Test') {
            steps {
                // Aquí puedes agregar tus pasos de pruebas
                echo 'Ejecutando pruebas...'
            }
        }

        stage('Deploy') {
            steps {
                // Aquí puedes agregar los pasos de despliegue
                echo 'Desplegando la aplicación...'
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
