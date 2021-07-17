/*
 * @Description: dns解析
 * @Author: zhangshuo
 * @Date: 2021-07-04 09:47:16
 * @LastEditors: zhangshuo
 */
/**
 * resolve: 将域名解析到dns记录中
 * reverse: 将IP转换成域名
 */
const dns = require('dns')

// 本地不存在就解析网络上的，网络断联就会进入错误
dns.resolve('www.baidu.com', 'A', function (error, res) {
    if (error) {
        console.log('发生错误', error)
    }
    console.log('解析结果', res)
})

// 先解析本地的dns
dns.lookup('www.baidu.com', 4, function (error, res) {
    if (error) {
        console.log('发生错误1', error)
    }
    console.log('解析结果1', res)
})
