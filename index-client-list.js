/*
 * @Description: 客户端列表
 * @Author: zhangshuo
 * @Date: 2021-06-26 23:06:28
 * @LastEditors: zhangshuo
 */
let net = require('net')

let chatServer = net.createServer()
let clientList = []

chatServer.on('connection', function(client) {
    client.write('Hi! \n');
    clientList.push(client)
    client.on('data', function(data) {
        for (let i = 0; i < clientList.length; i++) {
            clientList[i].write(data.toString())
        }
    })
})

chatServer.listen(9000)
