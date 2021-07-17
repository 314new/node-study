/*
 * @Description: 向读取的服务器发送数据
 * @Author: zhangshuo
 * @Date: 2021-07-03 19:49:27
 * @LastEditors: zhangshuo
 */
const http = require('http')
let options = {
    host: 'www.baidu.com',
    port: 80,
    path: '/'
}

// 请求数据
let req = http.request(options, function (res) {
    console.log('获取到的数据结果', res)
    res.setEncoding('utf-8')

    res.on('data', function (chunk) {
        console.log(chunk, '查询数据！')
    })
})

// 发送数据
req.write('my data to you')
console.log('发送数据完毕')

req.end()
