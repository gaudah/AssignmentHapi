

pipeline {
 
agent any


stages {


 stage('Build') {
            steps {
                echo 'copy path of pipeline...'
            	sh 'cp ${JENKINS_HOME}/wokspace/TEST/ /home/sumit/TESTPATH/' 
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

 

