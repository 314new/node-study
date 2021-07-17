/*
 * @Description: 发送数据监听
 * @Author: zhangshuo
 * @Date: 2021-06-26 23:06:28
 * @LastEditors: zhangshuo
 */
let net = require('net')

let chatServer = net.createServer()
chatServer.on('connection', function(client) {
    client.write('Hi! \n');
    client.on('data', function(data) {
        console.log(data.toString())
    })
})

chatServer.listen(9000)
