/*
 * @Description: 事件循环和计数器（访问事件循环）
 * @Author: zhangshuo
 * @Date: 2021-07-13 07:23:30
 * @LastEditors: zhangshuo
 */
const http = require('http')

let s = http.createServer(function (req, res) {
    // console.log(req, '请求=======================')
    res.writeHead(200, {})
    res.end('foo')
    console.log('http response')
    process.nextTick(function () {
        console.log('tick')
    })
})

s.listen(8080)
// 这里控制台打印出俩个请求信息是因为图标favicon.ico也在里面了
