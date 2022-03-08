const express = require('express')
const app = express()
//导入session中间件
const session = require('express-session')
app.use(
	session({
		secret: 'itheima', //可以为任意值
		resave: false, //固定写法
		saveUninitialized: true, //固定写法
	})
)
//托管静态页面
app.use(express.static('./pages'))
//解析post提交过来的表单数据
app.use(express.urlencoded({ extended: false }))
//获取session的接口
app.post('/api/login', (req, res) => {
	//判断用户提交的登录信息是否正确
	if (req.body.username !== 'admin' || req.body.password !== '000000') {
		return res.send({ status: 1, msg: '登录失败' })
	}
	req.session.user = req.body //将用户信息存储到Session中
	req.session.islogin = true //将用户的登录状态存储到session中
	res.send({ status: 0, msg: '登陆成功' })
})
//获取用户姓名的接口
app.get('/api/username', (req, res) => {
	//判断用户是否登录
	if (!req.session.islogin) {
		return res.send({ status: 1, msg: 'fail' })
	}
	res.send({ status: 0, msg: 'success', username: req.session.user.username })
})
//退出登录的接口
app.post('/api/logout', (req, res) => {
	//清空 当前 客户端对应的session信息
	req.session.destroy()
	res.send({
		status: 0,
		msg: '退出登录成功',
	})
})
// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8080, function () {
	console.log('Express server running at http://127.0.0.1:8080')
})
