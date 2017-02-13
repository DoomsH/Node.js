/**
 * Created by dllo on 2017/2/13.
 */

//global
// console.log(global);

//__dirname  __filename
//获取当前文件所处路径
console.log(__dirname);
//获取当前文件所处完整路径
console.log(__filename);

//设置延迟多少毫秒做某事，单次计时器
//参数1：回调函数     参数2：延迟多少毫秒执行（1~2147483647）    参数3及以后：回调函数中所需要的参数3的值，依次填入
var timer = setTimeout(function (name, age) {
    console.log('本人叫' + name + '，今年' + age + '岁');
}, 1000, '张三', 38);

//清除延迟做某事，清除单次计时器
// clearTimeout(timer);


//设置间隔多少毫秒做某事，循环定时器
//参数1：回调函数     参数2：间隔 单位为毫秒     参数3及以后：回调需要的参数
var timer2 = setInterval(function () {
    console.log('啾咪惹');
},1000);

//清除间隔做某事，清除循环做某事
clearInterval(timer2);


//使用一下两个函数可能出现性能方面的问题，慎用
//取消回调函数的回调
timer.unref();
//恢复回调函数的回调
timer.ref();