// console.log('Hello Node.js')
//导入fs模块，来操作文件
const fs = require("fs");
//调用fs.readFile()方法读取文件
// fs.readFile('.././files/1.txt','utf-8',function(err,result){
// 	//打印失败
// 	//读取成功为null
//     //失败，err的值为错误对象，
// 	console.log(err);
// 	console.log("------");
// 	//打印成功结果
//     //失败为undefined
// 	console.log(result);
// });

fs.readFile("./files/1.txt", "utf-8", function (err, result) {
	//判断是否读取成功
	//判断err是否为null
	if (err) {
		return console.log("读取文件失败！" + err.message);
	}
	console.log("读取文件成功" + result);
});
