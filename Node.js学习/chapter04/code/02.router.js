//路由模块
//监听get和post请求并且向客户端响应数据
const express=require('express');
//创建路由对象
const router=express.Router();
//挂载具体的路由
router.get('/get', (req, res) => {
	const query=req.query
	res.send({
		status: 0,
		msg:'GET请求成功',
		data:query
	})
})
router.post('/post', (req, res) => {
	const body = req.body
	res.send({
		status: 0,
		msg: 'POST请求成功',
		data: body
	})
})


module.exports= router;