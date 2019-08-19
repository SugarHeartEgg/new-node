'use strict'

var fs = require('fs')

/**
 * 
 *    异步读取文件 
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
  // console.log(data);
  console.log(data.length + ' shuai');

  // Buffer ---->  String
  var str = data.toString('utf-8');
  // console.log(str);

  // String ---->  Buffer
  var buf = Buffer.from(str, 'utf-8');
  // console.log(buf);

  // 这里留个问题: 
  // buf 打印出的内容与原始 Buffer 数据  不一样  是怎么回事 ?
})


/**
 *
 *    同步读取文件
 *
 */

var data = fs.readFileSync('yi.txt', 'utf-8');
console.log(data);

// 同步读取文件时 , 发生错误 , 用哪个try....catch 捕获错误 , 在使用同步的时候 , 最好加上它 , 可避免一些不必要的麻烦 . 
try {
  var data = fs.readFileSync('woqu.text', 'utf-8');
  console.log(data);
} catch (err) {
  console.log(err);
}


/**
 * 补充:
 *      同步异步 , 与宏任务和微任务有关 , 且明确一点 , 宏任务必然在微任务之后执行 .
 *                  (微任务实际上是宏任务其中的一个(步骤)小任务)
 */