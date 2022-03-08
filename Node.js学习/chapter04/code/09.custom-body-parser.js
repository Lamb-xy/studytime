const qs = require('querystring')

function bodyParser(req, res, next) {
	//定义中间件具体的业务逻辑
	//定义一个str字符串，专门存储客户端发送的请求体数据
	let str = ''
	//监听req的data事件
	req.on('data', (chunk) => {
		str += chunk
	})
	req.on('end', () => {
		// console.log(str);
		const body = qs.parse(str)
		// console.log(body);
		req.body = body
		next() //调用next()函数，执行后续的业务逻辑
	})
}
module.exports=bodyParser;