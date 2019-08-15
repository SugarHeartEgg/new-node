'use strict'

var fs = require('fs')

/**
 * 
 * 
 *    异步读取文件 
 *        同步暂不管(基本很少使用)
 * 
 */


fs.readFile('lian.txt', 'UTF-8', function (err, data) {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});


/**
 *
 *    读取二进制文件
 * 
 *    不传入文件编码时 , data参数返回的是一个Buffer对象 , 
 *    并且Buffer是一个包含0个或多个的数组(与Array不同) , 
 *    Buffer对象可以与String相互转换
 *
 */

fs.readFile("lian.png", function (err, data) {
  if (err) throw err
  console.log(data);
  console.log(data.length + ' shuai');

  // Buffer ---->  String
  var str = data.toString('utf-8');
  // console.log(str);

  // String ---->  Buffer
  var buf = Buffer.from(str, 'utf-8');
  console.log(buf);
})