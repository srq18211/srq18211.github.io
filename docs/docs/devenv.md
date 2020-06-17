## Nodejs 版本管理
[nvm](https://github.com/nvm-sh/nvm)
[nvm-windows](https://github.com/coreybutler/nvm-windows)
[nvm-mac](https://github.com/coreybutler/nvm-windows)

## Nodejs 进程管理
[pm2](https://github.com/Unitech/pm2)

#### 安装
```js
 npm install pm2@latest -g
 # or
 yarn global add pm2
```
#### 启动 进程
```js
 pm2 start app.js
 pm2 start bashscript.sh
 pm2 start python-app.py --watch
 pm2 start binary-file -- --port 1520
```
#### 管理 进程
```js
 pm2 restart app_name
 pm2 reload app_name
 pm2 stop app_name
 pm2 delete app_name
```
[详细文档](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)

## Webpack 打包构建
[webpack](https://www.webpackjs.com/)

## Git 版本控制
[git](https://git-scm.com/)

## Yapi 协作平台
[yapi](https://github.com/YMFE/yapi)
- 独立于后端：数据 mock 可添加脚本模拟任何真实响应
- 降低沟通成本：支持 markdown 备注（可粘贴微信截图）
- 旧系统改造：HAR 文件生成接口

