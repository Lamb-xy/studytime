//使用class关键字来定义一个类
/*
包含：属性和方法
 */
class Person{
    //readonly表示只读，写在static前面
readonly name: string='孙悟空';
//static在前面代表类属性(方法)或者静态属性(方法)
static age: number=18;
static sayhello(){
    console.log('hello');
}
}
const  per=new Person();
console.log(per);
console.log(Person.age);
Person.sayhello();