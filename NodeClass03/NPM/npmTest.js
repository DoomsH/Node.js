/**
 * Created by dllo on 2017/2/15.
 */

var moment = require('moment');
var http = require('http');

http.createServer(function (req,res) {
    setInterval(function () {
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        console.log(time);
        res.end(time);

    },1000);
}).listen(3000);

console.log('服务器启动');


