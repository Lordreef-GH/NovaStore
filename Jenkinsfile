pipeline {
  agent any
  options { timestamps() }
  environment {
    NODE_VERSION = '20'
    IMAGE_NAME   = 'novastore:ci'
  }
  stages {
    stage('Checkout') { steps { checkout scm } }

    stage('Install & Build') {
      steps {
        sh '''
            set -eu
          docker run --rm -u root:root -v "$PWD:/app" -w /app node:${NODE_VERSION}-alpine sh -lc '
            set -eu
            node -v
            npm -v
            npm ci || npm install
            npm run build
          '
        '''
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }

    stage('Docker Build') {
      steps {
        sh '''
            set -eu
          docker build -t ${IMAGE_NAME} .
        '''
      }
    }

    stage('Deploy (Docker Desktop)') {
      steps {
        sh '''
            set -eu
          docker compose down || true
          docker compose up -d --build
          docker ps
        '''
      }
    }
  }
  post {
    success { echo 'NovaStore deployed on http://localhost:8082' }
  }
}
