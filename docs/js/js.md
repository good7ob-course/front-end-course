## 1 变量
### 1.1 格式
```js
// 定义 变量 = 引号
var name = '前端'
```
### 1.2 变量类型
> 不能用 保留字或者关键字 作为变量名
- string number boolean array object
  - 字符串拼接
- 判断变量类型
  - typeof 运算符返回一个字符串，表示操作数的类型
  - instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上 age instanceof Array,Array.isArray(age)
  - Object.prototype.toString.call(age)
- 保留字或者关键字
1. var
2. switch
3. true
4. false
5. Array
6. switch
7. function
8. while
9. do
10. this
#### 1.2.1 array
- 通过下标获取元素，数组可以放任何类型的变量,有length属性
- concat 不会更改现有数组，而是返回一个新数组
- slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。

- pop() 从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度
- shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
- unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。
- push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
- reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。
- splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
#### 1.2.2 object
- 通过key获取元素，key只能是字符串，值是任意类型+
#### 1.2.3 function
- function calc(){}
- var calc = function(){} 函数表达式
- 函数的返回值
- arguments 是函数的参数，是一个对应于传递给函数的参数的类数组对象
- 遇到 return 不会继续走了
### 1.3 获取dom元素的方式
1. getElementsByClassName 获取到的是一个集合（数组）
2. getElementsByTagName 同上
3. getElementById 获取到的是一个唯一的dom
### 1.4 创建dom
1. createElement
   1. innerText
   2. className
   3. id
2. appendChild
3. removeChild
4. insertBefore 会将其从当前位置移动到新位置

## 2. 点击事件
1. onclick=function(){}
## 3. 给元素的class操作
- className = 'test'
- id = 'test'
- classList.add
- toggle
## 4. 循环,流程控制
- for: for(var i=0; i<arr.length; i++){}
- if(){}else{}
- if(){}else if(){}else{}
- switch
- while 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。
- do...while 语句创建一个执行指定语句的循环，直到condition值为 false。在执行statement 后检测condition，所以指定的statement至少执行一次。
## 5. 运算符
> 遇到括号先执行括号，在执行其他(乘除优先，在加减)
- ||  有一个为真，即条件是真
- && 必须满足所有，才为真
- == 模糊匹配 数字的字符串和number
- === 严格匹配
- '+ - * / **'
## 6. this
> 谁去调用它，谁就是this,但是我们可以通过下面三种去改变this（上下文）,要去理解作用域
- 最大全局对象 window
- bind 用于函数
- call 用于函数和对象
- apply 用于函数和对象
## 小知识点
- ++在前在后的小区别，在前是先赋值在计算，在后是先计算在赋值