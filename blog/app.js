// 应用启动入口文件
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//创建APP应用 ==》 http.createServer()
const app = express();

//bodyParser 为 每个请求的 request 对象增加 req.body ； 用来显示请求携带的数据
// 最佳实践中： 要求bodyParser针对不同的MIME type分别写出不同的 jsonParser /urlencodedParser 详情见 npm中的介绍
app.use(bodyParser.urlencoded({extended: true}));// 设置true，可以解析所有类型的数据；

//设置静态文件托管
//当用户访问的url以 /public开始，那么直接返回对应__dirname + '/public' 下的文件
// app.use('/public', express.static(path.join(__dirname + '/public'))); // 使用或者不使用 path 模块都行，其实就是路径写对就好了
//==引入文件时候，是否省略 /public ?==========
// app.use('/public', express.static(__dirname + '/public')); // link  href="/public/css/main.css"
app.use(express.static(__dirname + '/public'));// 可以直接使用 link  href="css/main.css"

//==使用 ejs 模板 步骤： 1.设置目录 2. 注册模板引擎==================
//1. 设置模板存放目录
app.set('views', __dirname + '/views'); // 第一个参数必须是views（不可变）， 第二个参数是目录名
//2. 注册模板引擎
app.set('view engine', 'ejs'); // 第一个参数必须是 view engine； 第二个参数必须和 app.engine 中的第一个参数一致，表示用什么引擎解析模板

//使用路由管理请求
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/main'))

//mongo
mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true}, (err)=> {
  if(err) {
    console.log('connect failed');
  }else {
    console.log('connect success');
    //连接成功之后  再监听app请求
    app.listen(8081);
  }
});
const db = mongoose.connection;
db.on('error', ()=> {
  console.log('connection error.');
});
db.once('open', ()=> {
  console.log('mongodb blog has connected.');
})


