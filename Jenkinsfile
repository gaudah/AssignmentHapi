

pipeline {
 
agent any


stages {


 stage('Build') {
            steps {
                echo 'copy path of pipeline...'
		sh 'ls ${HOME}/workspace/test'
		sh 'cp -vr /home/sumit/Assignment/Assignment_using_Koa/* /home/sumit/TESTPATH/'
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

 

