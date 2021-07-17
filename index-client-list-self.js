/*
 * @Description: 获取非自己发送的消息数据
 * @Author: zhangshuo
 * @Date: 2021-06-26 23:06:28
 * @LastEditors: zhangshuo
 */
let net = require('net')

let chatServer = net.createServer()
let clientList = []

chatServer.on('connection', function(client) {
    client.name = client.remoteAddress +  ':' + client.remotePort
    client.write('Hi! ' + client.name + '\n');
    clientList.push(client)
    client.on('data', function(data) {
        broadacast(data, client)
    })
})

function broadacast(message, client) {
    for (let i = 0; i < clientList.length; i++) {
        if (client !== clientList[i]) {
            clientList[i].write(client.name + 'say ' + message.toString() + '\n')
        }
    }
}

chatServer.listen(9000)
