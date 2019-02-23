const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

let server_base = http.createServer((req, res)=> {
  console.log('req');
  // console.log(req);
  res.setHeader('wq1', '456');
  res.writeHead(200, 'wq', {'content-type': 'text/html'})
  res.write('<h1>123</h1>');
  res.end();
});
/*server.on('request', (req, res)=> {
  console.log('req');
  // console.log(req);
  res.setHeader('wq1', '456');
  res.writeHead(200, 'wq', {'content-type': 'text/html'})
  res.write('<h1>123</h1>');
  res.end();
})*/
server_base.on('error', (error)=>{// 先走
  console.log('error');
  console.log(error);
})
server_base.on('listening', ()=> { // 先走
  console.log('listening');
})
server_base.listen(8080, 'localhost', (err)=> {
  if(err) {
    console.log('listen');
    console.log(err);
  }
  console.log('server is running localhost:8080');
})