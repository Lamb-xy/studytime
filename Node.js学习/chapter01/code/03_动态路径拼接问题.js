const fs = require("fs");
//'./' '../'是相对路径，容易出现动态路径拼接问题
//可以使用完整的绝对路径，防止这个问题
//但是移植性很差，不利于维护，一般都采用相对路径
// fs.readFile(".././files/11.txt", "utf-8", function (err, result) {

//要使用双斜杠避免转义符号'\'
// fs.readFile(
// 	"D:\\一些学习笔记\\studytime\\Node.js学习\\chapter01\\files\\1.txt",
// 	"utf-8",
// 	function (err, result) {
// 		if (err) {
// 			return console.log("读取文件失败！" + err.message);
// 		}
// 		console.log("读取文件成功" + result);
// 	}
// );

fs.readFile(__dirname + "/files/1.txt", "utf-8", function (err, result) {
	if (err) {
		return console.log("读取文件失败！" + err.message);
	}
	console.log("读取文件成功" + result);
});
//--dirname 表示当前文件所处的目录
// console.log(__dirname);
