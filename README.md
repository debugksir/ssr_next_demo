This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

点击前往[文档](https://www.yuque.com/debugksir/blog/lmaogn)

## 记录

### 2021-12-14

#### 命令篇

- pm2 -h # 查看帮助文档
- pm2 list # 列举pm2启动的服务列表
- pm2 start xxx # 启动服务
- pm2 restart xxx # 重启服务
- pm2 stop id # 停止服务
- pm2 delete|del id # 停止并删除服务
- pm2 kill # 杀掉所有进程
- 查看pm2 日志： pm2 logs
- 查看服务仪表盘：pm2 monit 或者 pm2 monitor 或者 pm2 plus
- pm2生成配置文件： pm2 ecosystem
- pm2启动命令： pm2 reload ecosystem.config.js --env development
- pm2启动命令： pm2 reload ecosystem.config.js --env production (切记生产环境启动之前需要build)
- package.json 中使用组合命令如： "start": "next build && pm2 reload ecosystem.config.js --env production", 相当于先执行next build 然后执行pm2 reload ecosystem.config.js --env production
- centos 下nginx默认配置文件目录：/usr/local/nginx/conf/nginx.conf
- service nginx reload == systemctl reload nginx.service

#### 踩坑篇

1. centos报错 libc.musl-x86_64.so.1:，next.js作者已经更新了二进制文件并提交了临时版本，解决如下

```bash
yarn add next@canary
```

2. 报错：Failed to load SWC binary for linux/x64， 解决如下：

```bash
在根目录添加.babelrc文件
添加内容：
{
  "presets": ["next/babel"]
}
```

3. next/head组件中不允许出现next/script
4. 组件名必须大写
5. pages目录下的文件必须有export default默认输出
6. 在next.config.js中添加env配置，可以在代码中读取到环境变量如process.env.NODE_ENV
7. 云服务器设置安全组后chrome浏览器访问无效，但在其他浏览器中正常，暂未找到解决方案，推测原因可能是chrome浏览器的缓存机制造成的
8. 如无法编译less文件，在node_modules/next/types/global.d.ts文件中添加

```js
declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}
```

## 部署

一键式部署
yarn start # 服务器测一键部署
yarn deploy # 开发者测一键部署
