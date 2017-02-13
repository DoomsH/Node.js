/**
 * Created by dllo on 2017/2/10.
 */

//获取文件系统模块
var fileSystem = require ('fs');
//文件系统模块读入文件
//参数1 要读入的文件路径
//参数2 选项，文本的编码格式
//参数3 回调函数
//异步执行（非阻塞执行）
// console.log('qian');
// fileSystem.readFile('./1.txt', 'utf-8', function (err, data) {
//    console.log(data);
//    console.log('zhong');
// });
// console.log('hou');


//同步执行（阻塞执行）
// console.log('qian');
//
// var data = fileSystem.readFileSync('./1.txt', 'utf-8');
// console.log(data);
// console.log('hou');


fileSystem.writeFile('./1.txt', 'ggg', 'utf-8', function (err, data) {
    console.log('写入成功');
});


var say = require('./SayHello');
say.sayHello(say.name);
