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
                sh 'docker ps'
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
                echo "starting deliver2.sh"
                sh './jenkins/scripts/deliver2.sh'
            }
        }
    }
}
