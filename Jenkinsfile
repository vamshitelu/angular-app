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
    }
}
