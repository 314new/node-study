/*
 * @Description: P110
 * @Author: zhangshuo
 * @Date: 2021-07-14 06:50:49
 * @LastEditors: zhangshuo
 */
const cp = require('child_process')

// 创建子进程，并执行相关指令
cp.exec('ls -l', function (e, stdout, stderr) {
    if (e) {
        console.log(e)
    } else {
        console.log(stdout)
        console.log(stderr)
    }
})

/**
如果子进程返回了错误的状态码或者是有其他异常发生，error 对象就不会是 null。
当子进程退出时，它会把状态传回给父进程。
比如，在 Unix 中，0 是表示成功，大于 0 的 8 位数字则用来表示错误。 
error 对象也可以用来表示被调用的命令不满足 Node 对它的限制。当错误代码从子 进程返回时，
error 对象会包含错误代码和 stderr。但是，若一个子进程运行是成功 的，stderr 中依然可以有数据
 */

// 第二个参数可以是个对象，用于配置之进程执行的条件
/* 
var options = { 
    encoding:
    'utf8',
    timeout: 0, maxBuffer: 200 * 1024, killSignal:
    'SIGTERM',
    setsid: false, cwd: null, env: null 
}; 
• encoding I/O 流输入字符的编码格式。 • timeout 进程运行的时间，以毫秒为单位。
• killSignal 当时间或 Buffer 大小超过限制时，用来终止进程的信号。
• maxBuffer stdout 或 stderr 允许最大的大小，以千字节为单位。 • setsid 是否创建 Node 子进程的新会话。
• cwd 为子进程初始化工作目录（null 表示使用当前的进程工作目录）。 
• env 进程的环境变量。所有的环境变量都可以从父进程继承。
*/
cp.exec(
    'ls -l',
    {
        maxBuffer: 1
    },
    function (e, stdout, stderr) {
        console.log('e: ' + e)
        console.log('stdout: ' + stdout)
        console.log('stderr: ' + stderr)
    }
)

// spawn自定义子进程流处理（可以完成主进程共享文件操作符，创建多进程，处理主进程分发的事务）
