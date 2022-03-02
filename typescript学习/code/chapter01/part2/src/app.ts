//tsc app.ts -w 只能监视当前文件,关闭就没有了
console.log('hello');
// let c =' hello';
//先添加配置文件，再执行tsc监视当前目录所有ts文件
// import {hi} from './m.js'
// console.log(hi);
function f(this: Window) {
alert(this);
}
//不存在box1可能会报错
let box1=document.getElementById('box1');
// if (box1!== null) {
//     box1.addEventListener('click', function () {
//         alert('hello');
//     });
// }
box1?.addEventListener('click',function () {
alert('hello');});
