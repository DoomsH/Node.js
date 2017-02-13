/**
 * Created by dllo on 2017/2/13.
 */

var Hello = require('./Hello');
// hello.sayHello('haha');

// var hello = new Hello();
// hello.setName('huhu');
// hello.sayHello();


//验证文件完整性  不会加载模块
//模块完整路径
var helloCache = require.resolve('./Hello');

//模块缓存
// console.log(require.cache);
delete require.cache[helloCache];
// console.log(require.cache);

//系统模块与自写模块有区别
//系统模块有自己系统模块的缓存
//缓存不保存在一起
var http = require('http');
console.log(require.cache);