#!/bin/bash
#--------------------------------------------
# 功能：发布代码到测试环境
# 发布代码到正式环境
#--------------------------------------------

# e p 分别为传入参数 $@ 什么意思
while getopts "e:p:" optname
do
  case "$optname" in
    "e")
      env=$OPTARG
      ;;
    "p")
      port=$OPTARG
      ;;
    "?")
      echo "$optname"
      exit
      ;;
    ":")
      echo "No argument value for option $OPTARG"
      exit
      ;;
    *)
      # Should not occur
      echo "Unknown error while processing options"
      exit
      ;;
  esac
done

# $env 为空直接默认为test环境
if [ -z $env ]; then
  env="test"
fi

case "$env" in
  "test")
    server="192.168.1.191"
    port=22
    ;;
  "production")
    server="暂时没有正式环境"
    port=19725
    ;;
  *)
    echo "-e 参数为 test 或 production"
    exit
    ;;
esac

# 本地路径
pwd
cd ..
# 远程路径
remotePath="root@$server:/mnt/xvdb/apache-tomcat-8.0.36/webapps"

/usr/bin/rsync -aP -e "ssh -p $port" ./static ${remotePath}
