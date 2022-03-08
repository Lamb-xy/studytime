//这是包的路口文件
const dateformat=require('./src/dateFormat');
const htmlescape=require('./src/htmlEscape');
//用...扩展运算符把这两个对象展开，然后暴露出去
module.exports={
    ...dateformat,
    ...htmlescape
}