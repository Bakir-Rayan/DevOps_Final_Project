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
        stage('start minikube') {
            steps {
                sh 'minikube start'
            }
        }
        stage('Deploy to Kubernetes') {
            steps{
                sh 'kubectl apply -f ./kubernetes'
            }
        }
        stage('get minikube services') {
            steps{
                sh 'minikube service front-end --url'
                sh 'minikube service api --url'
            }
        }
    }
}
