/*
 * @Description:加密
 * @Author: zhangshuo
 * @Date: 2021-07-04 10:54:03
 * @LastEditors: zhangshuo
 */
const crypto = require('crypto')

// 这里用var 是防止重复声明错误出现
var md5 = crypto.createHash('md5')

let str = '满天星'
md5.update(str)
// 输入要加密的字符（这里可以持续update加入新的数据，最后遇到digest后就是所有的数据连在一起的加密结果，这里就不再演示）
let str1 = '皆是你'
md5.update(str1)

// 默认输出的为二进制格式的加密结果，这里可以指定hex十六进制的结果
let res = md5.digest('hex')
console.log('加密:' + str + str1 + ', 得到结果：' + res)

var md5 = crypto.createHash('md5')
let all = '满天星皆是你'
md5.update(all)
let _all = md5.digest('hex')
console.log('加密:' + all + ', 得到结果：' + _all)
