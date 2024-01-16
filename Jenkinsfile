pipeline {
    agent any

    stages {
        stage("Checkout") {
            steps {
                // Check out the source code from your repository
                checkout scm
            }
        }
        stage("Build"){
            steps{
                 bat 'docker build -t my-app:1.2 .'
            }
        }
        stage("Deploy"){
            steps {
                withCredentials([usernamePassword(credentialsId:'docker_cred',passwordVariable: 'DOCKER_PASSWORD',usernameVariable: 'DOCKER_USERNAME')]){
                    bat 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    bat 'docker tag my-app:1.2 vamshitelu/my-app:1.2'
                    bat 'docker push vamshitelu/my-app:1.2'
                    bat 'docker logout'
                }
            }
        } 
    }
}
