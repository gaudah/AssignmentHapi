#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node:carbon'
            args '-u root -p 5000:5000 --net host'
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
                sh 'node server.js'
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
