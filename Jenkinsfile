pipeline {
    agent any
    stages {
        stage("Checkout") {
            steps{
                checkout scm
            }
        }
        stage("Build") {
            steps{
              sh 'sudo apt npm'
              sh 'npm run build --prod'
            }
        }
    }
}
