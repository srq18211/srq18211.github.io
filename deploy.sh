#!/usr/bin/env sh
# -------------------------------------------------------------------------------
# Filename:    deploy.sh
# Revision:    1.1
# Date:        2020年6月14日14:50:31
# Author:      xinzeedu@163.com
# Description: 部署脚本
# -----------------------------------------------------------------------------------------------
# 打印输出命令
set -x
# 当发生错误时中止脚本
# set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
git push -f git@github.com:srq18211/srq18211.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

read
cd -