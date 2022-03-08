//导入

const fs = require("fs");
//第二个参数为写入的内容
// fs.writeFile('../files/11.txt','我是被写入的内容',function(err){
//     //写入成功为null
//     //写入失败err为错误对象
//     console.log(err);

// })

//判断是否成功
//可以建立新文件
fs.writeFile("./files/1.txt", "我是被写入的内容", function (err) {
	if (err) {
		return console.log("文件写入失败" + err.message);
	}
	console.log("文件写入成功");
});
