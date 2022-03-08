const express = require('express')
const app = express()
const cors=require('cors')
app.use(express.urlencoded({entended: false}))
//必须在配置cors之前配置jsonp接口
app.get('/api/jsonp',(req,res)=>{
	//定义要发送到客户端的数据对象
	const data = { name: 'zs', age: 22 }
	//创建一个回调函数，
	const funcName = req.query.callback
	// 然后在服务器上调用这个函数并且将JSON 数据形式作为参数传递，完成回调。
	const scriptStr = `${funcName}(${JSON.stringify(data)})`
	//响应给客户端
	res.send(scriptStr)
})
//一定要在路由之前配置cors中间件,支持跨域请求
app.use(cors())
const apiRouter=require('./02.router.js')
app.use('/api',apiRouter)
app.listen(8080, () => {
	console.log('express server running at http://127.0.0.1:8080')
})
