"use strict";
(function () {
    //不希望用animal创建对象，把它变为抽象类
    /*
    专门用来继承的类
    抽象类中可以添加抽象方法
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('旺财');
    dog.sayHello();
})();
