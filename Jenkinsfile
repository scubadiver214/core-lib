#!groovy
@Library('shared-jenkins@master') _
import java.text.SimpleDateFormat

// Developer Variables

//Below lines are to be changed as per the Dev Team's requirement
def versionPrefix = '1.0.0'

// Devops Variables
//Below lines are to be changed by Devops Team only

def build_server = 'linux'
def Version = null
def PackageName = null
def NpmVersion = null
def git_vars = [:]
//Build properties
properties([ disableConcurrentBuilds(), buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5'))])
jenkins.branch.WorkspaceLocatorImpl.PATH_MAX=0

timestamps
{
    node(build_server)
    {
        deleteDir()
        try
        {
            stage('Set Build Version')
            {
                def dateFormat = new SimpleDateFormat("yyyy.M.d")
                def date = new Date()
                def dateString = dateFormat.format(date)
                def versionString = dateString+'.'+BUILD_NUMBER
                Version = VersionNumber versionNumberString: versionString, versionPrefix: ''
                currentBuild.displayName = Version
            }

             stage('SCM Pull')
            {
                git_vars = checkout scm
                checkout(changelog: false, poll: false, scm:
                    [
                        $class: 'GitSCM',
                        branches: [
                            [name: "*/${env.BRANCH_NAME}"]
                        ],
                        doGenerateSubmoduleConfigurations: false,
                        extensions: [
                        ],
                        submoduleCfg: [],
                        userRemoteConfigs: [
                            [
                                credentialsId: 'EmployeeAzureCreds2',
                                url: 'https://tr-corp-default@dev.azure.com/tr-corp-default/OneSourceProvision/_git/OTP-CORE-UI'
                            ]
                        ]
                    ]
                )
            }

            stage('Set build version on artifact'){
              sh "sed -i 's/\$build/$Version/g' package.json"
              sh "sed -i 's/\$build/$Version/g' config/package.json"
              NpmVersion  = sh(returnStdout: true, script: "grep  -Po  '(?<=version)(.*)' config/package.json | tr -d ':,\" '").trim()
              PackageName = sh(returnStdout: true, script: "grep  -Po  '(?<=name)(.*)' package.json | tr -d ':,\" '").trim()
            }
 
            stage('Authenticate registry'){
              withCredentials([usernamePassword(credentialsId: "TRArtifactoryServiceAccount", passwordVariable: 'JFROG_PASS', usernameVariable: 'JFROG_USER')]) {
                  def encoded = "$JFROG_USER:$JFROG_PASS".bytes.encodeBase64().toString()
                  sh """
                      set +x
                      echo -e "_auth = $encoded\nemail = CTTOpsandPlatformSRE@thomsonreuters.com\nalways-auth = true" > .npmrc
                     """
               }
            }
            
            stage('Build')
            {
                 sh "npm install rimraf"
                 sh "npm run-script build:prod"
            }

            stage('Publish')
            {
                 sh 'npm publish'
            }

            stage('Push Artifacts')
            {
                dir('dist'){
                artifactory.pushPackageToTRArtifactory("$NpmVersion", "npm-local/ctt/OTP/OTP_Core/@otp", "$BRANCH_NAME", "${PackageName}-${NpmVersion}.tgz")
                  }
            }
            
            currentBuild.result = 'SUCCESS'
        } catch (e) 
        {
            echo e.getMessage()
            currentBuild.result='FAILURE'
            throw e
        } 
    }
}
