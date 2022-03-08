const express = require('express')
const userRouter=require('./02.router.js')
const app = express()
//注册路由模块
app.use('/api',userRouter);//也可以添加访问前缀,这里是统一的

//app.user()的作用，就是用来注册全局中间件
app.listen(8080, () => {
	console.log('express server running at http://127.0.0.1:8080')
})
