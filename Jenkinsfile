#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node:carbon'
            args '-u root -p 9000:9000 --net host'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'curl -XGET http://localhost:9000/getDetails'
            }
        }
        stage('Success') {
            steps {
                echo 'Testing Success...'
                sh 'echo success'
            }
        }
    }
}
