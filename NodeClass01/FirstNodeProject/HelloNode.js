// /**
//  * Created by dllo on 2017/2/10.
//  */
//
//
// //require 接收 http 模块（node核心库）
// var http = require('http');
// //创建服务器
// //参数为匿名函数（闭包）
// http.createServer(function (req, res) {
//     //req
//     //request 请求
//     //res
//     //response 响应
//
//
//     //给response添加响应头
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('HelloNodeJS!');
//     //监听3000端口
// }).listen(3000);
// console.log('Sever running at http://127.0.0.1:3000');
//
//


'use strict';
const http = require('http');
http.createServer((req, res) => {
    let status = 200;
    res.writeHead(status, {'Content-Type': 'text/plain'});
    res.end('HelloNodeJS!');
}).listen(3000);
console.log('Sever running at http://127.0.0.1:3000');
