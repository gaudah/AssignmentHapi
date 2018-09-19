

pipeline {
 
agent any


stages {


 stage('Test') {
            steps {
                echo 'copy path of pipeline...'
            	sh 'cp ${JENKINS_HOME}/jobs/wokspace/koa pipeline/ /home/sumit/TESTPATH/' 
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

 

