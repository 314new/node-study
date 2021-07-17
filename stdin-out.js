/*
 * @Description: 标准输入流输出流
 * @Author: zhangshuo
 * @Date: 2021-07-12 07:36:43
 * @LastEditors: zhangshuo
 */
process.stdin.resume()
process.stdin.setEncoding('utf-8')
process.stdin.on('data', function (chunk) {
    process.stdout.write('data: ' + chunk)
})

process.stdin.on('end', function () {
    process.stdout.write('all is end')
})
