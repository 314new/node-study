/*
 * @Description: 哈希算法+加密密钥
 * @Author: zhangshuo
 * @Date: 2021-07-04 11:13:47
 * @LastEditors: zhangshuo
 */
const crypto = require('crypto')
const fs = require('fs')

let pem = fs.readFileSync('./key.pem')
let key = pem.toString('ascii')

let sha = crypto.createHmac('sha1', key)

sha.update('满天星')
let res = sha.digest('hex')

console.log('哈希算法+加密密钥方式：', res)
