//object表示一个js对象
var a;
a = {};
a = function () { };
//{}用来指定对象的属性
//在属性名后面加上？表示属性可选
var b;
b = { name: '孙悟空', age: 10 };
//[propName: string]: any表示任意类型的属性
var c;
c = { name: '猪八戒', a: 1, b: 2 };
//设置函数结构的类型声明
//语法：(形参: 类型, 形参: 类型 ...) =>返回值
var d; //箭头函数
d = function (n1, n2) {
    return n1 + n2;
};
/*
数组的类型声明
类型[]
Array<类型>
 */
var e;
e = ['a', 'b', 'c'];
//number[] 表示数值数组
var f;
var g;
g = [1, 2, 3];
//下面是TS新增
/*
元祖,元祖就是固定长度的数组
语法： [类型，类型 ...]
 */
var h;
h = ['hello', 123];
/*
enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
