(function () {
    //不希望用animal创建对象，把它变为抽象类
    /*
    专门用来继承的类
    抽象类中可以添加抽象方法
     */
   abstract class Animal{
        name:string;
        constructor(name:string) {
            this.name=name;
        }
        //抽象方法没有方法体，只能定义在抽象类中，子类必须对它重写
       abstract sayHello():void;
    }
    class Dog extends Animal{
        sayHello() {
            console.log('汪汪汪');
        }
    }
    const dog=new Dog('旺财');
    dog.sayHello();
})();