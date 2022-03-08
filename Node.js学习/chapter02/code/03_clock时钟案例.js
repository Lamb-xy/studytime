const http = require("http");
const fs = require("fs");
const path = require("path");
const { dirname } = require("path");
const server = http.createServer();
server.on("request", (req, res) => {
	// //将资源的请求路径映射为文件的存放路径
	const url = req.url;
	// const fpath = path.join(__dirname, url);
    
    //优化资源的请求路径
	let fpath = "";
	if (url === '/') {
		fpath = path.join(__dirname, "./clock/index.html");
	} else {
		fpath = path.join(__dirname, "./clock", url);
	}
	//根据映射过来的路径读取文件，返回给客户端
	fs.readFile(fpath, "utf8", (err, dataStr) => {
		if (err) return res.end("404 not found");
		res.end(dataStr);
	});
});
server.listen(8080, () => {
	console.log("server listen at http://127.0.0.1:8080");
});
