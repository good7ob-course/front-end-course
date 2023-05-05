- 
## 1.历史
## 2.认识标签
- html
- head
  - meta
  - title 浏览器标题
  - link 引入css,rel,href
- body
  - div 占一行，块标签
  - h1~h6 块标签
  - article 写文章
  - audio
  - dl dt dd 块标签，列表标签
  - ul li 块标签，列表标签
  - ol li 块标签，有序列表标签
  - footer 页脚
  - header 导航
  - p 文章段落
  - table,tbody,tfoot,thead,th,tr,td
  - canvas
  - a 行标签 https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a
    - href
  - span 行标签
    - 特点，不能设置宽高，但是可以设置margin 和 padding
  - img 行内块标签, src alt
  - input value,placeholder
    - type: button,checkbox,radio,text默认
  - textarea
  - button ,disabled
  - select配合option
  - form
    - label 和 id 配合可以在内部高亮表单元素
  - audio
  - video
### 2.1
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript
## 3.css
### 3.1 style
- color: 16进制 blue,rgba,rgb https://developer.mozilla.org/zh-CN/docs/Web/CSS/color
- background-color
- width
- font-size
- margin-bottom
- padding
- border
- opacity
- text-align  center,left,right
- text-decoration none,
- font-weight  bold,normal
- float left,right，none，必须清除浮动
- display, block none
  - inline 
  - inline-block
  - block
- position
  - absolute 如果没有设置宽高，会导致元素宽高变成内容撑开,他会根据最近的一个非static 元素来定位
  - relative 相对定位,相对于自己定位
  - fixed 定位,相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。
- transform
  - translateY translateX translate 相对于本身的一个偏移，可以写百分比，像素px
- cursor
- background-image url(''')
- background-size 100%,cover,contain
- background-repeat repeat,no-repeat
- box-shadow x，y,偏移量，颜色
- transition 属性，动画执行时长，动画延长(如果不加，默认没有)，动画曲线(liner匀速)
#### 3.1.1
- style优先级比class优先级高
- id选择器优先级最高
### 3.2 class
同类的样式适合用class
- 权重问题
- 伪类：after,hover
  - hover hover某个元素，让其他的元素产生作用
### 3.3 id
> id 不能重复，只能是唯一的
> 
### 3.4 tag标签选择器
### 3.5 伪类选择器
- :first-child
- :last-child
- :nth-child
- :nth-of-type
### css3
- transform transform-origin(改变偏移转化的顶点)
  - rotate deg单位
  - scale
  - skew
- animation
  - animation-name
  - animation-duration
  - animation-delay
  - animation-timing-function
  - animation-direction
  - animation-iteration-count
- linear-gradient linear-gradient(to bottom,#e66465, #9198e5);
- 媒体查询
  - @media (min-width: 980px)
  - <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0" name="viewport">
- 移动端单位 px,rem,em,vh,vw
  - px
  - rem 相对于根节点html的大小
  - em 相对于父级的大小
  - vh 视口宽度的 1%。
  - vw 视口高度的 1%。
### flex
- justify-content
  - center 水平居中，start,end
- align-items
  - center 垂直居中,start,end
- flex-direction
  - row 默认横向排列
  - column 
## 4.行块区别
1. 块标签可以设置宽高，行内不可以
## 5
1. 浏览器的介绍
2. 历史
## 6.盒模型
- margin
  - margin-top margin-bottom有合并的情况
- padding
- border
- border-radius  写百分比，可以写px,50%为圆,上右下左 来设置。
- box-sizing 
  - content-box 默认,会计算border和padding
  - border-box 特点：不计算border和padding
## 7.注释
- style 注释 /**/
## 作业
- 今天实现的 [ruanyi.html](ruanyi.html)
- https://www.zhangxinxu.com/wordpress/2023/03/css-revert-layer-global-keyword/
- https://gitee.com/ 注册完之后 点击 https://gitee.com/Weibozzz/demo
- 点击fork
  - git clone 
  - git pull
### 第二天
- ruanyi.html
- https://www.zhangxinxu.com/wordpress/page/2/
## 重要的
一定要自己盲写，有问题再去找答案，

