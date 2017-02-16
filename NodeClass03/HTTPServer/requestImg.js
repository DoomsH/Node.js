/**
 * Created by dllo on 2017/2/15.
 */

var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var server = http.createServer();

server.on('request',function (req,res) {
    if (req.url !== '/favicon.ico'){
        var urlPath = url.parse(req.url).pathname;
        var filePath = path.join(__dirname,urlPath);
        fs.stat(filePath,function (error,state) {
            if (!error && state.isFile()){
                fs.createReadStream(filePath).pipe(res);
                res.statusCode = 200;
            }else {
                res.statusCode = 404;
                res.end('404,不给找');
            }

        });

    }else {
        res.end();
    }

});


server.listen(8080,function () {
    console.log('服务器启动啦');
});









// var http = require('http');
// var url = require('url');
// var path = require('path');
// var queryString = require('querystring');
// var getStaticFile = require('./getStaticFile');
//
// var server = http.createServer();
//
// server.on('request',function (req,res) {
//     if (req.url !== '/favicon.ico'){
//         var urlPath = url.parse(req.url).pathname;
//         var filePath = path.join(__dirname,urlPath);
//         //正则匹配  .xxx  文件后缀
//         var reg = /.+\.[A-Za-z0-9]+/g;
//         if (reg.test(urlPath)){
//             getStaticFile(filePath,res);
//         }else {
//             if (urlPath == '/login'){
//                 console.log('此处为登录逻辑');
//                 var data = "";
//                 req.on('data',function (smallData) {
//                     console.log(smallData);
//                     data += smallData;
//                 });
//                 req.on('end',function () {
//                     var dic = queryString.parse(data);
//                     // console.log(dic);
//                     // console.log(dic.username);
//                     // console.log(dic.password);
//                     if (dic.username == 'qwe' && dic.password == '123'){
//                         res.statusCode = 200;
//                         res.end('登录成功');
//                     }else {
//                         res.statusCode = 200;
//                         res.end('账号或密码错误');
//                     }
//                 });
//             }
//             // console.log('这是一个文件夹');
//             // res.statusCode = 200;
//             // res.end('文件夹路径'+filePath);
//         }
//         // console.log('此次请求方法为：'+req.method);
//         // console.log('此次请求域名为：'+req.host);
//         // console.log('此次请求端口为：'+req.port);
//         // console.log('此次请求头为：'+req.headers);
//
//     }else {
//         res.end();
//     }
//
// });
//
//
// server.listen(8080,function () {
//     console.log('服务器启动啦');
// });
