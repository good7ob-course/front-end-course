## es6
> 2015 年 6 月 之后的版本，统称 Es6

## 解构赋值
- 默认值：数组，函数，对象
## 字符串
字符串拼接,用反引号和${} 配合代替传统的引号和加号的方式拼接
- includes
## 数值的扩展
- NaN 全局属性 NaN 是一个表示非数字的值。 通过isNaN来判断
- parseInt 解析一个字符串并返回指定基数的十进制整数
- isFinite() 方法用来检测传入的参数是否是一个有穷数。
## 运算符的扩展
- 链判断运算符
- null 判断运算符
  - null 和 undefined 都会取值后面的
## Promise
> 解决回掉地狱
> 
- then()
- catch()
- finally()
- all 所有的请求都成功才会成功，有一个失败则失败
- race 只要有一个先成功，就返回先成功的那个
### async await
是一个 promsie 链式调用的语法糖
