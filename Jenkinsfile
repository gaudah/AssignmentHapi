

pipeline {
 
agent any


stages {


 stage('Build') {
            steps {
                echo 'copy path of pipeline...'	
		sh 'pwd'
		sh 'ls ${HOME}/workspace/test'
		sh 'cd'	
		sh 'pwd'
		sh 'cp ${HOME}/temp.js ${HOME}/workspace/test/'
		sh 'pwd'
		sh 'ls ../../../../../home/sumit/TESTPATH/'
		sh 'pwd'
		sh 'cd ../../../../../home/sumit/'
		sh 'pwd'
            }
        }

 stage('Test') {
            steps {
                echo 'Testing Success...'
                sh 'echo success'
            }
        }

fileOperations([fileCopyOperation(excludes: '', flattenFiles: false, includes: '/home/sumit/Temp/*', targetLocation: '/home/sumit/TESTPATH/')])


}
}

