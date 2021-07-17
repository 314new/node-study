/*
 * @Description: 入口
 * @Author: zhangshuo
 * @Date: 2021-06-27 09:57:35
 * @LastEditors: zhangshuo
 */
let express = require('express')
const app = express()
const bodyParser = require('body-parser')
let tweets = []

// 解析请求数据，可以设置数据类型
app.use(bodyParser())
// 设置模板目录
app.set('views', './views')
// 设置模板引擎
app.set('view engine', 'pug')
// 消息信息记录列表
let tweets = []

app.get('/', function (req, res) {
    res.render('index', {
        locals: {
            title: title,
            header: header,
            tweets: tweets,
            stylesheets: ['./public/common.css']
        }
    })
})

app.post('/send', function (req, res) {
    if (req.body && req.body.tweet) {
        tweets.push(req.body.tweet)
        console.log(tweets)
        res.send({
            status: 'ok',
            message: 'Tweet received'
        })
    } else {
        res.send({
            status: 'nok',
            messaage: 'No tweet received'
        })
    }
})

app.get('/tweets', function (req, res) {
    res.send(tweets)
})

app.listen(8000)
