stage('Build General') {
    agent {
        label 'docker-node'
    }

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
