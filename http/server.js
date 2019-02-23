const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

let server = http.createServer();
server.on('request', (req, res)=> {
  console.log('req');
  // console.log(req);
  let htmlDir = __dirname + '/html/';
  let urlObj = url.parse(req.url);
  console.log(urlObj);
  console.log(urlObj.pathname);
  switch(urlObj.pathname) {
    case '/':
      console.log('index');
      sendData(htmlDir + 'index.html', res);
      break;
    case '/login':
      sendData(htmlDir + 'login.html', res);
      break;
    case '/login/check':
      let checkData = querystring.parse(urlObj.query);
      if(req.method.toUpperCase() === 'GET') {
        console.log('GET');
        console.log(checkData.username);
      }else if(req.method.toUpperCase() === 'POST'){
        console.log('POST');
        let str = '';
        req.on('data', (chunk)=> {
          console.log('data');
          console.log(chunk);
          str += chunk;
        })
        req.on('end', ()=> {
          console.log('end');
          console.log(querystring.parse(str));
          res.writeHead(200, {'content-type': 'text/plain'})
          res.write('123789')
          res.end();
        })
      }

      break;
    default:
      break;
  }
})
server.on('error', (error)=>{// 先走
  console.log('error');
  console.log(error);
})
server.on('listening', ()=> { // 先走
  console.log('listening');
})
server.listen(8080, 'localhost', (err)=> {
  if(err) {
    console.log('listen');
    console.log(err);
  }
  console.log('server is running localhost:8080');
})

function sendData(filename, res){
  console.log(filename);
  console.log(res);
  fs.readFile(filename, (err, data)=> {
    if(err) {
      res.writeHead(404, {'content-type': 'text/html'});
      res.write('not found');
      res.end();
      return;
    }
    console.log('data');
    console.log(data);
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(data);
    res.end();
  })
}