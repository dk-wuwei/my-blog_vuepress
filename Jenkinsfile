pipeline {
    agent any

    stages {
        stage('pull code') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '272ea9c2-af02-4db8-a944-383143684748', url: 'git@github.com:dk-wuwei/my-blog_vuepress.git']]])
                echo 'pull success!!!'
            }
        }
        
        stage('build project') {
            steps {
                nodejs('node14.17.3') {
                    sh '''if [ ! -d \'./node_modules\' ]; then
                            npm install
                        fi
                        package=./package.json
                        md5=package_md5
                        package_md5_new=$(md5sum -b $package | awk \'{print $1}\'|sed \'s/ //g\')
                        createMd5(){
                            echo $package_md5_new > $md5
                        }
                        if [ ! -f $md5 ] ; then
                            createMd5
                        fi
                        package_md5_old=$(cat $md5|sed \'s/ //g\')
                        echo "$package_md5_new ----- $package_md5_old"
                        if [ "$package_md5_new" != "$package_md5_old" ]; then
                            createMd5
                            npm install
                        fi
                        npm run build
                        tar -zcvf dist.tar.gz ./dist'''
                }
                echo 'build success!!!'
            }
        }
    
        stage('pubilsh project') {
            steps {
               sshPublisher(publishers: [sshPublisherDesc(configName: 'my-server', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''cd /home/webserver/static/
                    tar -zxvf dist.tar.gz
                    rm -rf dist.tar.gz
                    mv dist my-blog''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/home/webserver/static/', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'dist.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                echo 'pubilsh success!!!'
            }
        }
    }
}
