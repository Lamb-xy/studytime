const express = require('express')

const app = express()
//定义一个中间件函数
// const mw=function (req,res,next) {
//     console.log('这是一个简单的中间件函数');
//     //转交给下一个中间件或者路由
//     next();
// }
// //将mw注册为全局生效的中间件
// app.use(mw);

app.use(function (req, res, next) {
	console.log('这是一个简单的中间件函数')
	//转交给下一个中间件或者路由
	next()
})
app.get('/', (req, res) => {
	res.send('Get.')
})
app.get('/user', (req, res) => {
	res.send('User page')
})
app.listen(8080, () => {
	console.log('express server running at http://127.0.0.1:8080')
})
