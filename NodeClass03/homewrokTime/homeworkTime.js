/**
 * Created by dllo on 2017/2/15.
 */

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var moment = require('moment');



var server = http.createServer();

server.on('request',function (req,res) {
    if (req.url == '/favicon.ico'){
        res.end();
    }else {
        var urlPath = url.parse(req.url).pathname;
        var filePath = path.join(__dirname,urlPath);
        fs.stat(filePath,function (error,state) {
           if (error){
               if (error.code == 'ENOENT'){
                   res.statusCode = 404;
                   res.end('404 未找到呀');
               }else{
                   //服务器存在问题
                   res.statusCode = 500;
                   res.end('500 服务器出问题啦');
               }

           }else {
               if (state.isFile()){
                   res.statusCode = 200;
                   fs.createReadStream(filePath).pipe(res);
               }else {
                   if (state.isDirectory()){
                       if (urlPath == '/time'){
                           res.statusCode = 200;
                           fs.createReadStream('./homeworkTime.html').pipe(res);
                       }else {
                           if (urlPath == '/nowTime'){
                               res.statusCode = 200;
                               res.end(moment().format('MMMM Do YYYY, h:mm:ss a'));
                           }else {
                               res.statusCode = 200;
                               res.end('存在文件夹');
                           }

                       }
                   }else {
                       res.statusCode = 200;
                       res.end('未知错误');
                   }
               }

           }
        });
    }
});







server.listen(3000,function () {
    console.log('服务器启动成功');
});

