pipeline {
    agent any
    stages {
        stage("Checkout") {
            steps{
                checkout scm
            }
        }
   #     stage("Test"){
   #         steps{
   #             sh 'sudo npm install'
   #             sh 'npm test'
   #         }
   #     }
        stage("Build"){
            steps{
                sh 'npm run build --prod'
            }
        }
        stage("Build Image"){
            steps{
                sh 'docker build -t my-app:1.2'
            }
        }
        stage("Deploy"){
            steps {
                withCredentials([usernamePassword(credentialsId:'docker_cred',passwordVariable: 'Krish@1234',usernameVariable: 'vamshitelu')]){
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker tag my-app:1.2 vamshitelu/my-app:1.2'
                    sh 'docker push vamshitelu/my-app:1.2'
                    sh 'docker logout'
                }
            }
        }
    }
}
