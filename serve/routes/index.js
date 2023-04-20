var express = require('express');
var router = express.Router();
router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/save', function (req, res, next) {
  console.log(req.body) // 获取参数
  res.send({
    success: true,
  })
})
router.get('/list', function (req, res, next) {
  res.send({
    success: true,
    data: {
      list: [123]
    },
  })
})
module.exports = router;
