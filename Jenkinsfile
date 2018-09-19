

pipeline {
 
agent any


stages {


 stage('Build') {
            steps {
                echo 'copy path of pipeline...'
		sh 'ls ${HOME}/workspace/test'
		sh 'sudo cp -vr ${JENKINS_HOME}/workspace/test /home/sumit/TESTPATH/'
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

 

