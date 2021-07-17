/*
 * @Description: 进程（全局未知异常处理）
 * @Author: zhangshuo
 * @Date: 2021-07-04 23:22:40
 * @LastEditors: zhangshuo
 */
process.on('uncaughtException', function () {
    console.log('监听到未知异常')
})

setTimeout(function () {
    console.log('延时执行处理函数')
}, 500)

nonexistentFunc()
// 下面的函数不能执行，因为上面的处理终止了它的执行动力
console.log('正常执行的处理')
