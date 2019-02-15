pipeline {
    agent {
        docker {
            image 'jenkinsci/blueocean' 
            args '-v /var/run/docker.sock:/var/run/docker.sock'  
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                echo 'npm install' 
            }
        }
        stage('Test') {
            steps {
                echo './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver2.sh'
            }
        }
    }
}
