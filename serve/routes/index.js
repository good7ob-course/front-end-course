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
// router.get('/list', function (req, res, next) {
//   res.send({
//     success: true,
//     data: {
//       list: [123]
//     },
//   })
// })
router.get('/categoryList', async function (req, res, next) {
  res.send({"code":1,"msg":"查询成功","data":[{"category_id":15,"name":"测试","picture_url":"http:\/\/labrador-dev.oss-ap-northeast-1.aliyuncs.com\/f960ed27d67641b9de33a345adb55bda.jpg"},{"category_id":11,"name":"高达","picture_url":null},{"category_id":13,"name":"假面骑士","picture_url":null},{"category_id":9,"name":"数码","picture_url":null},{"category_id":14,"name":"奥特曼","picture_url":null}]})
})
router.get('/priceList', async function (req, res, next) {
  res.send({"code":1,"msg":"","data":[{"name":"500元以下","price":"0-500"},{"name":"501元-1200元","price":"501-1200"},{"name":"1201元-3000元","price":"1201-3000"},{"name":"3001元-5000元","price":"3001-5000"},{"name":"5000元以上","price":"5000-1000000"}]})
})
module.exports = router;
