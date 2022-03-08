const express = require('express')
const app = express()

const mw1 = function (req, res, next) {
	console.log('应用级别的局部中间件')
	next()
}
//绑定到app实例上的就是应用级别的中间件
//绑定到router实例上的就是路由级别的中间件
app.use(function (req, res, next) {
	console.log('应用级别的全局中间件')
	next()
})

app.get('/', mw1, (req, res) => {
	res.send('Home page.')
})
app.get('/user', (req, res) => {
	res.send('User page')
})
app.get('/err', (req, res) => {
    throw new Error('我是自己制造的错误！')
	res.send('User 。。')
})
//4个参数错误级别的中间件，专门用来捕获整个项目的异常，防止项目异常崩溃，客户端可以得到错误相关的内容
//错误处理的中间件必须在所有路由之后
app.use(function (err,req, res, next) {
	console.log('发生了错误'+err.message)
    res.send('Error!'+err.message)
})
app.listen(8080, () => {
	console.log('express server running at http://127.0.0.1:8080')
})
