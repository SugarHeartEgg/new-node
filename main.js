'use strict'

/**
 * 
 *     把写好 module.js 中暴露的函数引入 .
 * 
 *     require(* 模块名或路径 *)
 *        PS: 
 *            当使用模块名引入时确保文件是存在的 , 
 *            因为模块名引入时 node 会从全局目录查找文件的 ,
 *            文件如果不存在 , 是会报错的 .
 *            
 *            引入的具体内容 , 取决于引入模块输出的对象 .
 * 
 */


var greet = require('./module');

var yi = 'lian shuai heng';

greet(yi);

// 你好 , lian shuai heng .