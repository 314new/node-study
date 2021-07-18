/*
 * @Description: 
 * @Author: zhangshuo
 * @Date: 2021-07-18 10:42:30
 * @LastEditors: zhangshuo
 */
var express = require('express');
var router = express.Router();

router.all('/', function(req, res, next) {
    console.log(req)
    next()
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
