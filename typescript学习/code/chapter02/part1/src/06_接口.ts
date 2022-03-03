(function () {
//描述一个对象的类型
    type myType={
        name:string,
        age:number
    };
    /*
    接口用来定义一个类结构,定义一个类中应该包含哪些属性和方法，也可以当成类型声明去使用
     */
    //定义一个接口，只能有抽象方法,抽象里面可以有普通方法
    interface myInterface{
        name:string;
        age:number;
    }
    interface myInterface{
        gender:string;
    }
    const obj: myInterface={
        name:'sss',
        age:111,
        gender:'男'
    }
    //接口中所有的属性都不能有实际的值
    //接口只定义结构不考虑实际值
    interface myInter{
        name:string;
        sayHello():void;
    }
    //定义类时可以使类去实现一个接口
    //使类满足接口的要求
    class MyClass implements myInter{
        name: string;
        constructor(name:string) {
        this.name=name;
        }
        sayHello(){
            console.log('hello')
        }
    }
    //接口实际上定义了一个规范，对类进行了限制
})();