#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node:carbon'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'docker build -t dockerimage117 .'
            }
        }

        stage('Run') {
            steps {
                echo 'Running...'
                sh 'docker run -p 8000:8000 --net host -d --name test_endpoints117 dockerimage117'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'curl -XGET http://localhost:8000/getDetails'
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
