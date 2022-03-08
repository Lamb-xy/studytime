const express = require('express')

const app = express()
//req和req在整个路由中间件中共享
app.use(function (req, res, next) {
    const time = Date.now()
    //为req对象挂载自定义属性，把时间共享给后面的所有路由
    req.startTime=time
	next()
})
app.get('/', (req, res) => {
	res.send('Home page.' + req.startTime)
})
app.get('/user', (req, res) => {
	res.send('User page.' + req.startTime)
})
app.listen(8080, () => {
	console.log('express server running at http://127.0.0.1:8080')
})
