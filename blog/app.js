// 应用启动入口文件
const express = require('express')
const ejs = require('ejs')

//创建APP应用 ==》 http.createServer()
const app = express();


//==使用 ejs 模板 步骤： 1.设置目录 2. 注册模板引擎==================
//1. 设置模板存放目录
app.set('views', __dirname + '/views') // 第一个参数必须是views（不可变）， 第二个参数是目录名
//2. 注册模板引擎
app.set('view engine', 'ejs') // 第一个参数必须是 view engine； 第二个参数必须和 app.engine 中的第一个参数一致，表示用什么引擎解析模板

/*
* get
* */
app.get('/', (req, res, next)=> {
  // res.send('<h1>我的博客！</h1>')
  /*
  * 读取views目录下的置顶文件，解析并返回客户端，
  * 第一个参数： 表示模板的文件，相对于views目录  views/index.html
  * 第二个参数： 传递给模板使用的数据 （后期使用）
  * */
  res.render('index', {
    name: 'wangqiang',
    sex: '男',
    content: 'hello'
  })

})


//监听app请求
app.listen(8081);
