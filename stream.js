/*
 * @Description:数据流(抽象，代码并不是这样写的)
 * @Author: zhangshuo
 * @Date: 2021-07-03 20:39:42
 * @LastEditors: zhangshuo
 */
const fs = require('fs')
let pool = ''

let stream = fs.readFile('./http-client.js', function (error, chunk) {
    console.log(chunk, '单独的块数据')
})

stream.on('data', function (chunk) {
    pool += chunk
})

stream.on('end', function () {
    console.log(pool)
})
