const program = require('commander');
const fs = require('fs');
const chalk = require('chalk');

// console.log( chalk.bgGreen.yellow('hello miaov') )


program
.arguments('<dirname>')
.option('-l, --list')
.action(function(dirname) {
    // console.log('带了参数' + dirname);

    // console.log(this.list);

    let files = fs.readdirSync(dirname);

    if (this.list) {
        let str = '';
        files.forEach(file => {

            let f = fs.statSync(dirname + '/' + file);

            if (f.isDirectory()) {
                 str += chalk.yellow(file) + '\r\n'
            } else {
                 str += file + '\r\n'
            }

           
        });
        console.log(str);
    } else {
        console.log(files);
    }

    
});


// console.log( __dirname );
// let files = fs.readdirSync(__dirname);
// console.log(files);

process.argv.push(__dirname);

program.parse( process.argv );