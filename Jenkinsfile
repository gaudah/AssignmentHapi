

pipeline {
 
agent any


stages {


 stage('Build') {
            steps {
                echo 'copy path of pipeline...'
		sh 'ls ${HOME}/workspace'
		sh 'cp -vr ${HOME}/${JENKINS_HOME}/var/lib/jenkins/workspace/test ${HOME}/TESTPATH/'
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

 

