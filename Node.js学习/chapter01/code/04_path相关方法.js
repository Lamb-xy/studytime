const path = require("path");
//路径拼接path.join()
// ../可以抵消上一层路径
const pathStr = path.join("/a", "b/c", "../", "./d", "e");
console.log(pathStr); // \a\b\d\e

//尽量不使用'+'进行路径拼接

//获取文件名path.basename()
//定义文件的存放路径
const fpath = "a/b/c/index.html";
const fullname = path.basename(fpath);
console.log(fullname);
//不显示后缀名
const nameWITHOUTExt = path.basename(fpath, ".html");
console.log(nameWITHOUTExt);

//获取文件拓展名path.extname()
const fext=path.extname(fpath);
console.log(fext);

