pipeline {
    agent {
        docker {
            image 'jenkinsci/blueocean' 
            args '-p 3000:3000'  
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            agent {
                docker {
                    image 'jenkinsci/blueocean'
                    args '-p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock'
                 }
            }
            steps {
                sh './jenkins/scripts/deliver2.sh'
            }
        }
    }
}
