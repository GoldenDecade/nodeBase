// 应用启动入口文件
const express = require('express')


//创建APP应用 ==》 http.createServer()
const app = express();

/*
* get
* */
app.get('/', (req, res, next)=> {
  res.send('<h1>我的博客！</h1>')
})


//监听app请求
app.listen(8081);