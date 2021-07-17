/*
 * @Description: 错误日志记录
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
    client.on('end', function() {
        let position = clientList.indexOf(client)
        clientList.splice(position, 1)
    })
    // 处理错误日志
    client.on('error', function(e) {
        console.log(e)
    })
})

function broadacast(message, client) {
    let cleanup = []
    for (let i = 0; i < clientList.length; i++) {
        if (client !== clientList[i]) {
            if (clientList[i].writable) {
                clientList[i].write(client.name + 'say ' + message.toString() + '\n')
            } else {
                cleanup.push(clientList[i])
                clientList[i].destory()
            }
        }
    }

    // 移除已经损坏的连接
    for(let i = 0; i < cleanup.length ; i++) {
        let position = clientList.indexOf(cleanup[i])
        clientList.splice(position)
    }
}

chatServer.listen(9000)
