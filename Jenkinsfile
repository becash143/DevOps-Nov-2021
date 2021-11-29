pipeline {
    agent { docker { image 'node:14-alpine' } }
      stages {
        stage('log version info') {
      steps {
        sh 'node --version'
        sh 'npm install'
      }
    }
  }
}
