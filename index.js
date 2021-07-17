/*
 * @Description: 基础服务
 * @Author: zhangshuo
 * @Date: 2021-06-26 23:06:28
 * @LastEditors: zhangshuo
 */
let net = require('net')

let chatServer = net.createServer()
chatServer.on('connection', function(client) {
    client.write('Hi! \n');
    client.write('Bye! \n')
    client.end()
})

chatServer.listen(9000)
