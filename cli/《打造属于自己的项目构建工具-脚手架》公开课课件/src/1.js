// 通过node来执行

const program = require('commander');


program
//设置当前脚本的版本信息，会自动的给当前命令添加一个-V，--version的选项
.version('1.0.0', '-v, --version')
//设置使用说明
.usage('我是说明书')
//配置命令参数
// .arguments('<v>');
//设置option
.option('-a, --all', '查看所有内容', function() {
    // 调用该option处理的事情
    // console.log('使用了-a')
})
.option('-n, --number <v>', '传入的一个数字', function(a) {
    // console.log(a);
    console.log('你传入的是：' + a);
})
;

// vue create
program
.command('create <project_name>')
.description('创建新的应用')
.usage('我是create的说明书')
.action(function(a) {
    console.log('创建新应用：' + a);

});

// console.log(program)

// console.log('Hello')
// console.log( process.argv );

// 解析当前命令行中的数据
program.parse( process.argv );