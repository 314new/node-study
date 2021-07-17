/*
 * @Description: http客户端
 * @Author: zhangshuo
 * @Date: 2021-07-02 23:59:27
 * @LastEditors: zhangshuo
 */
let http = require('http')

let options = {
    host: 'www.baidu.com',
    port: 80,
    path: '/'
}

let req = http.request(options, function (res) {
    console.log(res, '请求数据结果')
    // 设置编码
    res.setEncoding('utf-8')
    res.on('data', function (data) {
        console.log(data, '数据监听结果')
    })
})

req.end()
