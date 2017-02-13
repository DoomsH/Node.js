
//打印错误提示
console.error('这里代码有问题');

//打印对象信息
var user = new Object();
user.name = '曹政';
console.dir(user);

//打印栈信息
// console.trace('这里代码也有问题');

//console断言
console.assert(1>20,'1不大于20');

//打印时间计时
console.time('timer');
for (var i=0; i<100000000; i++){
    ;
}
console.timeEnd('timer');