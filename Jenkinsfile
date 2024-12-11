pipeline {
    agent any
    
    stages {
        stage('Primera etapa') {
            steps {
                echo 'Hola, mundo!'
            }
        }
        stage('Segunda etapa') {
            steps {
                echo 'Hola, mundo!'
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
