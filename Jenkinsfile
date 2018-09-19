pipeline {
 
agent {
 
dockerfile {
 
filename ‘Dockerfile’
 
label ‘preconfigured-node-to-download-this-image’
 
}
 
}

stages {

 stage('Test') {
            steps {
                echo 'Testing Success...'
                sh 'echo success'
            }
        }


}
 
}
