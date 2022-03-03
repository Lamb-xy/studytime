(function () {
class Person{
    //TS可以在属性前添加属性修饰符
    /*
    public表示可以在任意位置修改
    private 私有属性，只能在类内部进行访问
  protected 受保护的属性，只能在当前类和子类使用
     */
   private _name:string;
    private _age:number;
    constructor(name:string,age:number) {
        this._name = name;
        this._age = age;
    }

//    getter/setter获取/设置属性

    // 通过在类中添加方法使得私有属性可以被外部访问
    //控制权在自己
    // getName(){
    //     return this._name;
    // }
    // setName(value: string){
    //     this._name= value;
    // }
    // getAge(){
    //     return this._age;
    // }
    // setAge(value: number){
    //     //判断年龄是否合法
    //     if(value>=0){
    //         this._age=value;
    //     }
    // }
//ts中设置getter方法的方式
    get name(){
        console.log('get name() 执行了')
        return this._name;
    }
    set name(value){
        this._name=value;
    }
    get age(){
        return this._age;
    }
    set age(value){
        if (value>=0){
            this._age=value;
        }
    }
}
const per = new Person('孙悟空',18);
/*
现在的属性是在对象中设置的，属性可以任意的被修改
将会导致对象中数据非常不安全
 */
    console.log(per.name);
    per.name='猪八戒';
    per.age=-33;
    console.log(per);
    // per.setName('猪八戒');
    // per.setAge(33);
    class A{
       // private num:number;
        num:number;
        constructor(num:number) {
        this.num=num;
        }
    }
    class B extends A{
        test(){
            console.log(this.num);
        }
    }
const b=new B(123);
    // b.num=33;
    class C{
        // name:string;
        // age:number;
        // constructor(name:string,age:number) {
        //     this.name=name;
        //     this.age=age;
        // }
        //可以直接将属性定义在构造函数中
        constructor(public name:string,public age:number) {
        }
    }
    const c= new C('xxx',14);
    console.log(c);
})();