// 也可以直接使用字面量进行类型声明
let a: 10;//类似于常量
a=10;
// a=11;
//使用 | 来连接多个类型
let b: "male" | "famale";//male或false
let c: boolean | string;
c=true;
c='hello';
//any相当于对该变量关闭了TS的类型检测
let d: any;//任意类型
//声明变量如果不指定类型，TS解析器会自动判断变量的类型为any(隐式的any)，建议不使用

// unknown 表示未知类型的值
let e: unknown;
e='hello';
let s: string;
//d的类型是any,它可以赋值给任意变量
s = d;
//unknown实际上就是一个类型安全的any
//e的类型是unknown,它不能赋值给其他变量
// s=e;
if (typeof e==="string"){
    s=e;
}
//类型断言(编译器不知道，自己知道)
//语法：1.变量 as 变量 2.<类型>变量
s=e as string;
s=<string>e;
// 尽量用unknown，不用any

//void用来表示空(undefined)，以函数为例，就表示没有返回值的函数
function fn(): void{
}
//never 表示永远不会返回结果
function fn2(): never {
  throw new Error('报错了！');
}