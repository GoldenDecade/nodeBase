// console.log(process);
// console.log(global.process);
// console.log(process.argv);// 一组包含命令行参数的数组  数组第一项是 node程序所在位置，之后的每一项都是node命令的参数
// console.log(process.execPath);// 开启当前进程的绝对路径
// console.log(process.env);// 返回用户环境信息

// console.log(process.version);// 返回node版本信息
// console.log(process.versions);// 返回node以及node依赖包版本信息
// console.log(process.pid);// 当前进程的pid
// console.log(process.title);// 当前进程的显示名称
// console.log(process.arch);// 返回当前CPU处理器架构  x64
// console.log(process.platform);// win32 当前操作系统平台
// console.log(process.cwd());// 当前进程的工作目录 E:\ODC\pcsdk\test\node
// process.chdir('../node2')
// process.memoryUsage();// 返回node进程的内存使用情况  单位是byte
/*setTimeout(()=> {
  // process.exit();// 退出
  console.log('进程');
  console.log(process.pid);
  // process.kill(15416);// 向进程发送消息 关闭进程
}, 2000)*/

/*
// case 1
process.stdin.resume()
process.stdin.on('data', function(chunk) {
  console.log('用户输入了: ' + chunk);
})
*/
/*process.stdin.resume()
var a, b;
process.stdout.write('请输入a的值：');

process.stdin.on('data', function(chunk) {
  if(!a) {
    a = Number(chunk)
    process.stdout.write('请输入b的值：');
  }else {
    b = Number(chunk)
    process.stdout.write(a + b+'')
  }

})*/


