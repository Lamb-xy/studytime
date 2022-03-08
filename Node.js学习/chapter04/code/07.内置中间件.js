const express = require('express')
const app = express()
//解析表单中的json格式的数据
app.use(express.json())//除了错误处理中间件，其他中间件必须写在所有路由之前
//配置解析url-encoded数据格式
app.use(express.urlencoded({extended: false}))
app.get('/user',(req,res)=>{
    //使用req.body可以接受客户端发来的请求体数据
    //默认情况下，不配置解析表单的数据中间件，req.body=undefined
    console.log(req.body);
    res.send('ok')
})
app.listen(8080, () => {
	console.log('express server running at http://127.0.0.1:8080')
})
