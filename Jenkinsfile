pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock -v var/jenkins_home:/var/jenkins_home'  
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
	        sh 'docker ps'
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver2.sh'
            }
        }
    }
}
