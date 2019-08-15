/**
 * 
 * 这里以严格模式 , 运行程序 . 减少潜在陷阱(坑)
 * 
 */

'use strict'

var lian = '你好';

function greet(name) {
  console.log(lian + ' , ' + name + ' . ');
}

/**
 * 
 *  把greet函数暴露出去 方便模块之间引用 . 
 * 
 *  PS:
 *      输出的变量可以是任意对象 . 函数 . 数组 . 等...
 * 
 *      exports.xx = xx (可以直接这样写 , 但是不能是 对象 或 数组)
 *        error: 
 *                exports = { greet:greet }
 * 
 * 
 *      module.exports = xx (可以是 数组 对象)
 *        success:
 *                module.exports = { greet:greet }
 *                
 *      原因:
 *            Node准备的exports变量和module.exports变量实际上是同一个变量，并且初始化为空对象{} ,
 *            这样可以直接往里面加东西 . 但是 , 如果我们要输出的是一个函数或数组 , 只能给module.exports
 *            var module = {
 *                  id: 'module', // 文件id
 *                  exports: {}   // 对应赋值的变量
 *                };
 * */

module.exports = greet;