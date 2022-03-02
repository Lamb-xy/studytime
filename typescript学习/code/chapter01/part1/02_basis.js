// 声明一个变量a，同时指定它的类型为number
var a;
//a 的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10;
a = 30;
// a='hello';//此行代码会报错，因为变量a的类型是number，不能赋值字符串
var b;
b = 'hello';
//b=123;
//声明完变量直接赋值
// let c: boolean = false;
//如果变量的声明和赋值同时进行，TS可以自动类型检测
var c = false;
c = true;
// c= 123;//报错
//JS中的函数是不考虑参数的类型和个数的
function sum(a, b) {
    return a + b;
}
// console.log(sum(123,456));
var result = sum(123, 456); //579
