/*
 * @Description: 入口
 * @Author: zhangshuo
 * @Date: 2021-06-27 09:57:35
 * @LastEditors: zhangshuo
 */
let express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser())

app.get('/', function(req, res) {
    res.send('Welcome to node twitter')
})

app.post('/send', function(req, res) {
    if (req.body && req.body.tweet) {
        tweets.push(req.body.tweet)
        console.log(tweets)
        res.send({
            status: 'ok',
            message: "Tweet received"
        })
    } else {
        res.send({
            status: 'nok',
            messaage: 'No tweet received'
        })
    }
})

app.get('/tweets', function(req, res) {
    res.send(tweets)
})

app.listen(8000)