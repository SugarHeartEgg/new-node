'use strict'

var fs = require("fs")



/**
 * 
 * 
 * 异步写入文件
 * 
 */
var data = "你好 , 这是异步写入数据";

fs.writeFile('lian.txt', data, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('ok . ');
  }
})



/**
 *
 *
 * 同步写入文件
 *
 */
var value = "你好 , 这是同步写入数据";

try {
  fs.writeFileSync('yi.txt', value)
} catch (err) {
  console.log(err);
}


/**
 *
 *
 * 异步获取文件的信息(size, message, time)
 * 
 *    使用时 , 成功会返回一个stat对象 , 失败就走err函数 ,
 * PS:
 *    官方建议: 
 *             不建议在调用 fs.open()、 fs.readFile() 或 fs.writeFile() 之前使用 fs.stat() 检查文件是否存在。
 *             而是应该直接打开、读取或写入文件，如果文件不可用则处理引发的错误。
 *        建议使用 fs.access() 去检查文件是否存在
 */
// fs.stat('yi.txt', function (err, stat) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.dir(stat);
//     // 这里自己做一些 , 文件类别判断 . 

//     // 是否是文件
//     console.log('isFile: ' + stat.isFile());
//     // 是否是目录
//     console.log('isDirectoty: ' + stat.isDirectory());

//     if (stat.isFile()) {
//       // 文件大小
//       console.log('size: ' + stat.size);
//       // 创建时间 Date对象
//       console.log('birth time: ' + stat.birthtime);
//       // 修改时间 Date对象
//       console.log('modified time: ' + stat.mtime);
//     }
//   }
// })



/**
 *
 *
 * 同步获取文件信息
 *    直接返回一个 stat() 对象
 *
 */
var mes = fs.statSync('lian.txt');
try {
  console.dir(mes);
  // 这里自己做一些 , 文件类别判断 . 

  // 是否是文件
  console.log('isFile: ' + mes.isFile());
  // 是否是目录
  console.log('isDirectoty: ' + mes.isDirectory());

  if (mes.isFile()) {
    // 文件大小
    console.log('size: ' + mes.size);
    // 创建时间 Date对象
    console.log('birth time: ' + mes.birthtime);
    // 修改时间 Date对象
    console.log('modified time: ' + mes.mtime);
  }
} catch (err) {
  throw err;
}


