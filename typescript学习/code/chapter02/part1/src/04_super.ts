(function () {
    class Animal{
        name:string;
        constructor(name:string) {
        this.name=name;
        }
        sayHello(){
            console.log('动物在叫');
        }
    }
    class Dog extends Animal{
        age:number;
        constructor(name:string,age:number) {
            //子类重新写了构造函数，必须使用super调用父类构造函数
            super(name);
            this.age=age;
        }
        sayHello() {
            //在类的方法中，super表示当前类的父类
            // super.sayHello();
            console.log('汪汪汪');
        }
    }
    const dog=new Dog('旺财',3);
    dog.sayHello();
})();