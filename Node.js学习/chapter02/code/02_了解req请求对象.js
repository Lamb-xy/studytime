const http =require('http');
const server = http.createServer();
//req是请求对象，包含了与客户端相关的数据和属性
//请求是指客户端发送的请求
//res是响应对象
// server.on('request',(req,res)=>{
//     const url=req.url;
//     const method=req.method;
//     const str=`你请求的url地址是 ${url},and requeast method is ${method}`;
//     // Your request url is /,and requeast method is GET
//     console.log(str);;
//     //调用res.end()方法，向客户端响应内容
//     //解决中文乱码
//     res.setHeader('Content-Type','text/html;charset=utf-8');
//     res.end(str);
// });
// server.listen(8080,()=>{
//     console.log('server running at http://127.0.0.1:8080');
// })
server.on("request", (req, res) => {
	const url = req.url; //获取请求的url地址
	let content = "<h1>404 Not found!</h1>";
	if (url === "/" || url === "/index.html") {
		content = "<h1>首页</h1>";
	} else if (url === "/about.html") {
		content = "<h1>关于页面</h1>";
	}
	//解决中文乱码
	res.setHeader("Content-Type", "text/html;charset=utf-8");
	//调用res.end()方法，向客户端响应内容
	res.end(content);
});
server.listen(8080, () => {
	console.log("server running at http://127.0.0.1:8080");
});