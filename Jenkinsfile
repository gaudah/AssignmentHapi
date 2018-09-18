#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node:carbon'
            args '-u root -p 3000:3000 --net host'
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
                sh 'curl -XGET http://localhost:3000/getDetails'
            }
        }
        stage('Success') {
            steps {
                echo 'Testing Success...'
                sh 'success'
            }
        }
    }
}
