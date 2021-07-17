/*
 * @Description: 僵尸进程处理
 * @Author: zhangshuo
 * @Date: 2021-07-02 06:57:52
 * @LastEditors: zhangshuo
 */
let cluster = require('cluster')
let http = require('http')
let numCpu = require('os').cpus().length

let workers = {}
let rssWarn = 50 * 1024 * 1024

if (cluster.isMaster) {
    createWorker()

    // 每分钟显示日志信息
    setInterval(function () {
        let time = new Date().getTime()
        for (let pid in workers) {
            let worker = workers[pid]
            if (worker.hasOwnProperty(pid) && worker.lastCb + 5000 < time) {
                // 僵尸进程处理
                workers[pid].worker.kill()
                delete workers[pid]
                createWorker()
            }
        }
    }, 1000)
} else {
    http.Server(function (req, res) {
        if (Math.floor(Math.random() * 200) === 4) {
            console.log('Stop ' + process.pid + 'from ever finishing!')
            while (true) {
                continue
            }
        }
        res.writeHead(200)
        res.end('Hello from ' + process.pid)
    }).listen(8080)

    setInterval(function report() {
        process.send({ cmd: 'reportMem', memory: process.memoryUsage(), process: process.pid })
    }, 1000)
}

function createWorker() {
    let worker = cluster.fork()
    workers[worker.process.pid] = { worker: worker, lastCb: new Date().getTime() - 1000 }
    worker.on('message', function (m) {
        console.log(m, workers[m.process])
        if (m.cmd === 'reportMem') {
            workers[m.process].lastCb = new Date().getTime()
            if (workers[m.process].memory > rssWarn) {
                console.log('Worker ' + process + ' use too much memory')
            }
        }
    })
}
