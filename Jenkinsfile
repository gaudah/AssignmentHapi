

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


stage('File') {
steps {
fileOperations([fileCopyOperation(excludes: '', flattenFiles: false, includes: '*.js', targetLocation: '.')])
fileOperations([fileCopyOperation(excludes: '', flattenFiles: false, includes: '*.js', targetLocation: '${HOME}/workspace/test/')])

dir("/home/sumit/TESTPATH") {
    fileOperations([fileCopyOperation(excludes: '', flattenFiles: true, includes: '*', targetLocation: "${WORKSPACE}")])
}

echo 'current dir'
sh 'pwd'
dir("/home/sumit/data/aishu") {
    fileOperations([fileCopyOperation(excludes: '', flattenFiles: true, includes: '${WORKSPACE}', targetLocation: "*")])
}


}
}

}
}

