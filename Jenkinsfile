

pipeline {
 
agent any


stages {


 stage('Build') {
            steps {
                echo 'copy path of pipeline...'
		sh 'ls ${HOME}/workspace/test'
		sh 'pwd'
		sh 'cp temp.js ${HOME}'
            }
        }

 stage('Test') {
            steps {
                echo 'Testing Success...'
                sh 'echo success'
            }
        }

}
}

 

