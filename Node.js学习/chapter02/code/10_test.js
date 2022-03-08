//导入自定义的格式化文件模块
const TIME=require('./09_dateFormat');

const dt=new Date();
// console.log(dt);
const newDT =TIME.dateFormat(dt);
console.log(newDT);