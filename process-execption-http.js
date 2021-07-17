/*
 * @Description:
 * @Author: zhangshuo
 * @Date: 2021-07-04 23:31:23
 * @LastEditors: zhangshuo
 */
let http = require('http')

let service = http.createServer(function (req, res) {
    res.writeHead(200)
    res.end('response')
    loggerhandler()
    console.log('sent response')
})

process.on('click', function (e) {
    console.log(e)
})

service.listen(8080)
