const express = require ('express')
const app = express()
app.use(express.static('./clock'))//url中不会出现clock
app.use(express.static('./public'))//根据clock和public添加顺序访问文件，这里先访问clock
// app.use('/abc',express.static('./clock'))//url里面要添加abc(挂载路径前缀/abc跟clock没有关系,自主添加)
app.listen(8080, () => {
	console.log('express server running at http://127.0.0.1:8080')
})
//nodemon 可以自动重启服务器
//把node命令改成nodemon