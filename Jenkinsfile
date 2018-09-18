#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node:carbon'
            args '-u root -p 3000:3000 --net host'
        }
    }
}
