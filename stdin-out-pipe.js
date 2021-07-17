/*
 * @Description: 标准输入-输出流-通道
 * @Author: zhangshuo
 * @Date: 2021-07-13 07:03:37
 * @LastEditors: zhangshuo
 */
// 分配缓存
process.stdin.resume()
// 将标准输入流转到标准输出流上
process.stdin.pipe(process.stdout)
