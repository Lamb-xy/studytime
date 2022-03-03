"use strict";
(function () {
    const obj = {
        name: 'sss',
        age: 111,
        gender: '男'
    };
    //定义类时可以使类去实现一个接口
    //使类满足接口的要求
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hello');
        }
    }
    //接口实际上定义了一个规范，对类进行了限制
})();
