"use strict";
class Dog {
    //constructor为构造函数
    constructor(name, age) {
        //this在实例方法中，表示当前的实例
        //在构造函数中当前对象就是当前新建的对象
        //this就表示当前对象
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name);
    }
}
const dog = new Dog('小黑', 3);
console.log(dog);
dog.bark();
