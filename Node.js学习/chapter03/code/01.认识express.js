const express=require('express');
const app=express();

//监听get和post请求并且向客户端响应数据
app.get('/user',(req,res)=>{
    res.send({name:'zs',age:18,gender:'男'});
})
app.post('/user', (req, res) => {
	res.send('这是一个post请求');
})
app.get('/', (req, res) => {
	//通过req.query可以获取客户端发送过来的查询参数，默认为空
    console.log(req.query);
    res.send(req.query);
})
app.get('/user/:id/:name', (req, res) => {//:id表示动态参数，可以有多个动态参数
    //req.params是动态匹配到的URL参数，默认空对象
	console.log(req.params)
	res.send(req.params)
})
app.listen(8080,()=>{
    console.log('express server running at http://127.0.0.1:8080');
})