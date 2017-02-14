/**
 * Created by dllo on 2017/2/13.
 */

'use strict';

//引入crypto模块
var crypto = require('crypto');
//声明包含密码的变量
var password = 'password';



//以md5的方式生成哈希值
var md5 = crypto.createHash('md5');
//生成哈希值
md5.update(password);
//以hex的编码方式对已生成的哈希值的摘要值进行编码
var code = md5.digest('hex');
console.log(code);


//以sha1的方式生成哈希值
var sha1 = crypto.createHash('sha1');
//生成哈希值
sha1.update(password);
//以hex的编码方式对已生成的哈希值的摘要值进行编码
var code2 = sha1.digest('hex');
console.log(code2);


//Hmac算法
var hmac = crypto.createHmac('sha256', 'secret-key');
hmac.update(password);
var code3 = hmac.digest('hex');
console.log(code3);


//封装加密方法
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

//封装解密方法
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

var data = 'Hello, this is a secret message!';
var key = 'Password!';
//加密
var encrypted = aesEncrypt(data, key);
//解密
var decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);


