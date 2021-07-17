/*
 * @Description: duo
 * @Author: zhangshuo
 * @Date: 2021-07-01 22:17:24
 * @LastEditors: zhangshuo
 */
let cluster = require('cluster')
let http = require('http')
let numCpus = require('os').cpus().length

if (cluster.isMaster) {
    for (let i = 0; i < numCpus; i++) {
        // 主线程创建子线程
        cluster.fork()
    }
    // 如果子线程存在死亡，则记录
    cluster.on('death', function (worker) {
        console.log('worker ' + worker.pid + ' is death!')
    })
} else {
    http.Server(function (req, res) {
        res.writeHead(200)
        res.end('Hello world!')
    }).listen(8080)
}
