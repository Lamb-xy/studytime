//object表示一个js对象
let a: object;
a={};
a= function () {};
//{}用来指定对象的属性
//在属性名后面加上？表示属性可选
let b: {name: string,age?: number};
b= {name: '孙悟空',age: 10};
//[propName: string]: any表示任意类型的属性
let c: {name: string,[propName: string]: any};
c= {name: '猪八戒',a: 1,b: 2};
//设置函数结构的类型声明
//语法：(形参: 类型, 形参: 类型 ...) =>返回值
let d: (a: number,b: number)=>number;//箭头函数
d =function (n1,n2): number {
    return n1+n2;
}


/*
数组的类型声明
类型[]
Array<类型>
 */
let e: string[];
e=['a','b','c'];
//number[] 表示数值数组
let f: number[];
let g: Array<number>;
g=[1,2,3];


//下面是TS新增
/*
元祖,元祖就是固定长度的数组
语法： [类型，类型 ...]
 */
let h: [string,number];
h=['hello',123];

/*
enum 枚举
把所有可能情况列出来
适合于在多个值之间选择的类型
 */
enum Gender{
    Male =0,
    Female
}
let i: {name:string,gender: Gender};
i={
    name: '孙悟空',
    gender: Gender.Male
}
// console.log(i.gender === Gender.Male);
//&表示同时
// let j: string & number;//这么写没意义
let j: {name: string}&{age: number};
j={name: '孙悟空',age: 18};
//类型的别名(简化类型的使用)
// type myType = string;
type myType = 1 | 2 | 3 | 4 | 5;
let k:myType;
let l:myType;
let m: myType;