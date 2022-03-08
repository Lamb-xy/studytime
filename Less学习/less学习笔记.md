---
title: Less学习笔记
date: 2022-3-3 22:34
swiper: true
swiperImg: ''
img: '/medias/post4.jpg'
excerpt: ''
categories: 前端学习
tags: [CSS预处理器,Less]
top: true

----

# Less学习

---

## 引入Less

1.在官网下载或者使用CDN

```text
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"></script>
```

2.在命令行使用npm安装

```text
npm install -g less
```

具体只用命令

```text
lessc styles.less > styles.css
```

## 开始学习

### 变量转换

#### 值变量

以@开头定义变量，把常用变量封装到一个文件中可以立于代码组织维护

```text
      /* Less */
      @color: #999;
      @bgColor: skyblue;//不要添加引号
      @width: 50%;
      #wrap {
        color: @color;
        width: @width;
      }
    
      /* 生成后的 CSS */
      #wrap {
        color: #999;
        width: 50%;
      }
```

#### 选择器变量

让选择器变动态

```text
      /* Less */
      @mySelector: #wrap;
      @Wrap: wrap;
      @{mySelector}{ //变量名 必须使用大括号包裹
        color: #999;
        width: 50%;
      }
      .@{Wrap}{
        color:#ccc;
      }
      #@{Wrap}{
        color:#666;
      }
    
      /* 生成的 CSS */
      #wrap{
        color: #999;
        width: 50%;
      }
      .wrap{
        color:#ccc;
      }
      #wrap{
        color:#666;
      }
```

#### 属性变量

减少代码书写量

```text
      /* Less */
      @borderStyle: border-style;
      @Soild:solid;
      #wrap{
        @{borderStyle}: @Soild;//变量名 必须使用大括号包裹
      }
    
      /* 生成的 CSS */
      #wrap{
        border-style:solid;
      }
```

#### url变量

修改项目资源的变量就可以了

```text
      /* Less */
      @images: "../img";//需要加引号
      body {
        background: url("@{images}/dog.png");//变量名 必须使用大括号包裹
      }
    
      /* 生成的 CSS */
      body {
        background: url("../img/dog.png");
      }
    
```

#### 声明变量

> 结构: @name: { 属性: 值 ;};
  使用：@name();

```text
      @background: {background:red;};
      #main{
          @background();
      }
```

### 变量运算

- 加减法时 以第一个数据的单位为基准
- 乘除法时 注意单位一定要统一

```text
@incompatible-units: 2 + 5px - 3cm; // 结果是 4px
@base: 5%;
@filler: @base * 2; // 结果是 10%
```

### 变量作用域

就近原则，不提闭包(闭包（closure）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。)

```text
      /* Less */
      @var: @a;
      @a: 100%;
      #wrap {
        width: @var;
        @a: 9%;
      }
    
      /* 生成的 CSS */
      #wrap {
        width: 9%;
      }
```

### 变量定义变量

```text
      @fnord:  "I am fnord.";
      @var:    "fnord";
      #wrap::after{
        content: @@var; //将@var替换为其值 content:@fnord;
      }
```

### 嵌套

#### &

&代表上一层选择器的名字

```text
 #header{
        &:after{
          content:"Less is more!";
        }
        .title{
          font-weight:bold;
        }
        &_content{//理解方式：直接把 & 替换成 #header
          margin:20px;
        }
      }
```

#### 媒体查询

元素从分开写——>可以写到一个文件

```text
      /* Less */
      #main{
          //something...
    
          @media screen{
              @media (max-width:768px){
                width:100px;
              }
          }
          @media tv {
            width:2000px;
          }
      }
      /* 生成的 CSS */
      @media screen and (maxwidth:768px){
        #main{
            width:100px; 
        }
      }
      @media tv{
        #main{
          width:2000px;
        }
      }
```

> 但是每一个元素要编译出自己的@media声明

#### 实战技巧

借助Less在元素中来定义自己的私有样式

```text
      /* Less */
      #main{
        // something..
        &.show{
          display:block;
        }
      }
      .show{
        display:none;//会被覆盖
      }
```

### 混合方法(Mixins)

#### 无参数方法

混合（Mixin）是一种将一组属性从一个规则集包含（或混入）到另一个规则集的方法。使用时直接键入

```text
      .card { // 等价于 .card()
          background: #f6f6f6;
          -webkit-box-shadow: 0 1px 2px rgba(151, 151, 151, .58);
          box-shadow: 0 1px 2px rgba(151, 151, 151, .58);
      }
      #wrap{
        .card;//等价于.card();
      }
```

#### 默认参数方法

@arguments指的是全部参数，传的参数一定要带单位
表示：@形参名: 数值

```text
.border(@a:10px,@b:50px,@c:30px,@color:#000){
          border:solid 1px @color;
          box-shadow: @arguments;//指代的是 全部参数
      }
      #main{
          .border(0px,5px,30px,red);//必须带着单位
      }
      #wrap{
          .border(0px);
      }
      #content{
        .border;//等价于 .border()
      }
```

#### 方法的匹配模式

- 与面向对象中的多态相似
- 传递的实参会找到多态方法中匹配度最高的(优先级高)
- 如果匹配的参数是变量，也会继续匹配

```text
      /* Less */
      .triangle(top,@width:20px,@color:#000){
          border-color:transparent  transparent @color transparent ;
      }
      .triangle(right,@width:20px,@color:#000){
          border-color:transparent @color transparent  transparent ;
      }
    
      .triangle(bottom,@width:20px,@color:#000){
          border-color:@color transparent  transparent  transparent ;
      }
      .triangle(left,@width:20px,@color:#000){
          border-color:transparent  transparent  transparent @color;
      }
      .triangle(@_,@width:20px,@color:#000){//@_是变量，可以被‘left’匹配
          border-style: solid;
          border-width: @width;
      }
      #main{
          .triangle(left, 50px, #999)
      }
      /* 生成的 CSS */
      #main{
        border-color:transparent  transparent  transparent #999;//先匹配重合度最高的
        border-style: solid;//继续写入规则
        border-width: 50px;
      }
```

#### 方法的命名空间

```text
      /* Less */
      #card(){
          background: #723232;
          .d(@w:300px){
              width: @w;
              
              #a(@h:300px){
                  height: @h;//可以使用上一层传进来的方法
                  width: @w;
              }
          }
      }
      #wrap{
          #card > .d > #a(100px); 
          //当使用'>'时,父元素不能加()
      }
      #main{
          #card .d();
      }
      #con{
          //.d() 如果前面没有引入命名空间 #card ，将会报错
          #card; // 这里可以加(),等价于 #card();
          .d(20px); //必须先引入 #card
      }
      /* 生成的 CSS */
      #wrap{
        height:100px;
        width:300px;
      }
      #main{
        width:300px;
      }
      #con{
        width:20px;
      }
    
```

#### 方法的条件筛选

Less不用if else ,用when

```text
        // and 运算符 ，相当于 与运算 &&，必须条件全部符合才会执行,另外还有 'when+not'和'when+,'
        .border(@width,@color,@style) when (@width>100px) and(@color=#999){
            border:@style @color @width;
        }
    
```

> 除了关键字true 以外的值都是false

#### 数量不定的参数

参数量不确定可以使用符号'...',类似于ES6的拓展运算符

#### 方法使用 ! important

表示最高优先级

#### 循环方法

1.属性拼接方法

- +_代表用空格拼接
- +代表用逗号拼接

```text
//逗号
      /* Less */
      .boxShadow() {
          box-shadow+: inset 0 0 10px #555;
      }
      .main {
        .boxShadow();
        box-shadow+: 0 0 20px black;
      }
      /* 生成后的 CSS */
      .main {
        box-shadow: inset 0 0 10px #555, 0 0 20px black;
      }
//空格
      /* Less */
      .Animation() {
        transform+_: scale(2);
      }
      .main {
        .Animation();
        transform+_: rotate(15deg);
      }
    
      /* 生成的 CSS */
      .main {
        transform: scale(2) rotate(15deg);
      }
```

#### 实战技巧

```text
      /* Less */
      .average(@x, @y) {
        @average: ((@x + @y) / 2);
      }
    
      div {
        .average(16px, 50px); // 调用 方法
        padding: @average;    // 使用返回值
      }
    
      /* 生成的 CSS */
      div {
        padding: 33px;
      }
```

### 继承(extend)

#### extend的使用

```text
      .animation{
          transition: all .3s ease-out;
          .hide{
            transform:scale(0);
          }
      }
      #main{
          &:extend(.animation);//格式：选择器:extend(被继承的方法)
      }
```

#### all全局搜索替换

使用选择器匹配到的全部声明

#### 减少代码的重复性

### 导入

1.导入less文件可以省略后缀
2.@import位置可以随意放

#### reference

只引入，不编译

#### once

```text
@import (once) "foo.less";//表示之后引入文件的重复代码都不会解析
```

#### multiple

使用@import (multiple)允许导入多个同名文件。

### 函数

#### 判断类型函数

- isnumber()
- iscolor()
- isurl

#### 颜色操作

- saturate  增加颜色饱和度。
- lighten  增加颜色亮度。
- darken  降低颜色亮度。
- fade  给颜色设定透明度。
- mix  根据比例混合两种颜色。

#### 数学函数

- ceil  向上取整。 
- floor 向下取整。
- percentage  将浮点数转换为百分比字符串。
- round  四舍五入。
- sqrt  计算一个数的平方根。
- abs  计算数字的绝对值，原样保持单位。
- pow  计算一个数的乘方。

### 其他

#### 注释

/* */ CSS原生注释，会被编译在 CSS 文件中。
/   / Less提供的一种注释，不会被编译在 CSS 文件中。

#### 避免编译

```text
      /* Less */
      #main{
        width:~'calc(300px-30px)';
      }
    
      /* 生成后的 CSS */
      #main{
        width:calc(300px-30px);
      }
```

#### 使用JS

Less由JS编写，因此代码中可以使用JS
