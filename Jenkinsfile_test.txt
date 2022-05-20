pipeline {
    agent any
    stages{
        stage('build and run') {
            steps {
                sh "docker compose build"      
            }
        }
        stage('Publish image to Docker Hub') {
            steps {
                withDockerRegistry([ credentialsId: "dockercredentials", url: "" ]) {
                    sh 'docker push rayanbak257/api:latest'
                    sh 'docker push rayanbak257/front-end:latest'
                }
            }
        }
    }
}
