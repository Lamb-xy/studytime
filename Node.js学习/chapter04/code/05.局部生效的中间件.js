const express = require('express')
const app = express()
//不使用app.use()局部生效
const mw1=function (req, res, next) {
	console.log('调用了第一个局部生效的中间件')
	next()
}
const mw2 = function (req, res, next) {
	console.log('调用了第二个局部生效的中间件')
	next()
}


//第二个参数mw1调用了局部生效的中间件
app.get('/', mw1,mw2,(req, res) => {
	res.send('Home page.')
})
app.get('/user', (req, res) => {//这个路由不会调用mw1
	res.send('User page')
})
app.listen(8080, () => {
	console.log('express server running at http://127.0.0.1:8080')
})
