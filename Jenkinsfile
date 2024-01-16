pipeline {
    agent any

    stages {
        stage("Checkout") {
            steps {
                // Check out the source code from your repository
                checkout scm
            }
        }

        stage("Test") {
            steps {
                // Use Node.js and npm installed on the Jenkins agent
                bat 'npm install'
            }
        }

        stage("Build") {
            steps {
                // Build the Angular app
                bat 'npm run build --prod'
            }
        }
        stage("Build Image"){
            steps{
                 bat 'docker build -t my-app:1.2'
            }
        }
        stage("Deploy"){
            steps {
                withCredentials([usernamePassword(credentialsId:'docker_cred',passwordVariable: 'Krish@1234',usernameVariable: 'vamshitelu')]){
                    bat 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    bat 'docker tag my-app:1.2 vamshitelu/my-app:1.2'
                    bat 'docker push vamshitelu/my-app:1.2'
                    bat 'docker logout'
                }
            }
        } 
    }
}
