# 使用说明

## 安装

```cmd

npm install lamb-tools

```

## 导入

```js

const lamb=require('lamb-tools1');

```

## 格式化时间

```js

//调用dateFormat对时间进行格式化
const dtStr=lamb.dateFormat(new Date());
console.log(dtStr);

```

## html特殊字符转义

```js
//待转换的html字符串
const htmlStr='<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
//调用htmlEscape方法进行转换
const str =lamb.htmlEscape(htmlStr);
console.log(str);

```

## html特殊字符还原

```js
//调用htmlEscape方法进行转换
const str2 =lamb.htmlUnEscape(str);
console.log(str2);

```

## 开源协议

ISC
