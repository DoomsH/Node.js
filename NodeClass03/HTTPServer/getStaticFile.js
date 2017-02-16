/**
 * Created by dllo on 2017/2/15.
 */


var fs = require('fs');
var getStaticFile = function (filePath,response) {
  fs.stat(filePath,function (error,state) {
        if (!error && state.isFile()){
            fs.createReadStream(filePath).pipe(response);
            response.statusCode = 200;
        }else {
            //文件无法找到
            if (error.code == 'ENOENT'){
                response.statusCode = 404;
                response.end('404 未找到呀');
            }else{
                //服务器存在问题
                response.statusCode = 500;
                response.end('500 服务器出问题啦');
            }

        }
  });
};

module.exports = getStaticFile;