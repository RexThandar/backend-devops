pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                script {
                    git url: GIT_REPO_URL, branch: GIT_BRANCH
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
