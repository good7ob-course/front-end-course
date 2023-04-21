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

- forEach() element,index,,无返回值(undefined)
- map() element,index,有相同长度数组的返回值，方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
- every() 必须所有的元素满足我的要求才返回true，否则false
- filter() 过滤满足我的要求的元素,返回一个满足条件的数组
- find() 返回第一个满足我们条件的元素，否则返回 undefined。
- findIndex() 返回第一个满足我们条件的元素索引。若没有找到对应元素则返回 -1。
- includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false
- indexOf() 方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1。
- lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
- join() 将一个数组的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。
- some() 方法测试数组中是不是至少有 1 个元素通过了w我们的要求。它返回的是一个 Boolean 类型的值。
- sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的

- pop() 从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度
- shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
- unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。
- push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
- reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。
- splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
#### 1.2.2 object
- 通过key获取元素，key只能是字符串，值是任意类型
- Object.keys() 方法会返回一个属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致。
- Object.values() 方法返回一个属性值的数组，值的顺序与使用 for...in 循环的顺序相同（区别在于 for-in 循环枚举原型链中的属性）。
- object.entries()
#### 1.2.3 String
- length 字符串的长度
- replace()  方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。如果pattern是字符串，则仅替换第一个匹配项。
- replaceAll()
- split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。
- trim() 方法从字符串的两端清除空格，返回一个新的字符串，而不修改原始字符串。此上下文中的空格是指所有的空白字符（空格、tab、不换行空格等）以及所有行终止符字符（如 LF、CR 等）。
- trimStart() 方法会删除字符串开头的空白字符。trimLeft() 是此方法的别名
- trimEnd() 方法会删除字符串末尾的空白字符。trimRight() 是这个方法的别名。
- substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集。
- startsWith() 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false。
#### 1.2.4 Date
#### 1.2.5 Math

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
### 1.5 箭头函数
- ()=>{} 单个参数可以省略括号

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
## 3. xhr
- XMLHttpRequest
- responseType
  - JSON.stringify()
  - JSON.parse()
### 3.1 跨域
- 协议 http/https
- 域名
- 端口 http(80)/https(443)
### 3.2 解决跨域
- nginx
- node 服务
- cors header('Access-Control-Allow-Origin', '*')