//自定义模块中,默认情况下，module.exports={}

const age=20;
module.exports.username='张三';
module.exports.sayHello=function(){
    console.log('hello!');
};
// module.exports.age=age;
//模块作用域的好处
/*
防止全局变量污染的问题
*/

// Node 提供了 exports 对象。默认情况下，exports 和 module.exports 指向同一个对象
//使用require() 模块时，得到的永远是 module.exports 指向的对象：
//不要在同一个模块中使用exports和module.exports

exports.username='zs';
module.exports={//这里为module.exports赋值了一个新对象
    gender:'男',
    age:22
}