(function () {
    // class Dog{
    //     name:string;
    //     age:number;
    //     constructor(name:string,age:number) {
    //         this.name=name;
    //         this.age=age;
    //     }
    //     sayHello(){
    //         console.log('汪汪汪');
    //     }
    // }
    //
    // class Cat{
    //     name: string;
    //     age: number;
    //     constructor(name:string,age:number) {
    //         this.name=name;
    //         this.age=age;
    //     }
    //     sayHello(){
    //         console.log('喵喵喵');
    //     }
    // }
    class Animal{
        name:string;
        age:number;
        constructor(name:string,age:number) {
            this.name=name;
            this.age=age;
        }
        sayHello(){
            console.log('动物叫');
        }
    }
    class Dog extends Animal{
        //方法重写
        sayHello(){
            console.log('汪汪汪');
        }
        run(){
            console.log(`${this.name}在跑`)
        }
    }
    class Cat extends Animal{
        sayHello(){
            console.log('喵喵喵');
        }
    }
    const dog=new Dog('旺财',5);
    const cat=new Cat('咪咪',5);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello();
})();