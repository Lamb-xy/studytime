// function fn(a:number): number {
// return a;
// }
/*
在定义函数或者类时，如果遇到不明确就可以使用泛型，需要根据实际情况决定
 */
//T在这里就是一个泛型
function fn<T>(a: T): T{
    return a;
}
//可以直接调用具有泛型的函数
//这里把number赋值给了T，利用了TS的类型判断
let result1=fn(10);
//指定泛型
let result2=fn<string>('hello');
//泛型可以同时指定多个
function fn2<T,K>(a:T,b:K):T {
    console.log(b);
    return a;
}
fn2<number,string>(123,'hello');
interface Inter {
    length:number;
}
//T extends Inter表示泛型必须使Inter实现类
function fn3<T extends Inter>(a:T):number {
return a.length;
}
// fn3({length:10});
class MyClass<T>{
    name:T;
    constructor(name:T) {
    this.name=name;
    }
}
const mc=new MyClass<string>('孙悟空');
//接口，泛型，抽象。。锦上添花