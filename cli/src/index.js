#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const fs = require('fs');

program
    .version('0.1.0', '-v, --version')
    .usage('我是说明书 -h 可以查看到详细信息 <file ...>')
    .option('-a, --all', '查看所有内容', function() {
      // 调用该option处理的事情
      console.log('使用了-a')
    })
    .option('-n, --number <number>', '传入的数字', function(number) {
      console.log('传入的数字是: ' + number);
    })
    .option('-w, --word <word>', '不是必须的参数', function(word) {
      console.log('传入的单词是: ' + word);
    })


//创建子命令  比如  vue create app
program
    .command('create <project_name>')
    .description('创建新的应用')
    .usage('我是create的说明书')
    .action(function(project_app) {
      console.log('创建新应用：' + project_app);
      let projectPath = __dirname + '/' + project_app;
      if(fs.existsSync(projectPath)) {
          console.log(chalk.red(`项目： ${project_app} 已经存在了`));
          return;
      }
      console.log(chalk.yellow(`即将创建项目： ${project_app}`));

      fs.mkdirSync(project_app);
      console.log(chalk.green('项目目录创建成功'));

      fs.writeFileSync(projectPath + '/index.html');
      console.log(chalk.green('项目首页创建成功'));

      fs.mkdirSync(projectPath + '/css')
      fs.mkdirSync(projectPath + '/js')
      console.log(chalk.green('项目 css & js 目录创建成功'));

      console.log(chalk.green('项目构建完成'));
    });


//解析当前命令行的数据  必须的
program.parse(process.argv);