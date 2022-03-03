"use strict";
//使用class关键字来定义一个类
/*
包含：属性和方法
 */
class Person {
    constructor() {
        //readonly表示只读，写在static前面
        this.name = '孙悟空';
    }
    static sayhello() {
        console.log('hello');
    }
}
//static在前面代表类属性(方法)或者静态属性(方法)
Person.age = 18;
const per = new Person();
console.log(per);
console.log(Person.age);
Person.sayhello();
