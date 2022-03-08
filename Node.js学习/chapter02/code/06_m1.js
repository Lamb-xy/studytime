// 当前这个文件是用户自定义模块
// console.log('加载了06这个模块');

module.exports.username='zs';
module.exports.sayHello=function(){
    console.log('Hello!');
}

//重新指向一个新的对象

module.exports={
    nickname:'小黑',
    sayHi(){
        console.log('hi!');
    }
}