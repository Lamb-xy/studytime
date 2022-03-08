const express = require('express')
const app = express()
const custombodyparser=require('./09.custom-body-parser')
app.use(custombodyparser)
app.post('/user',(req,res)=>{
    res.send(req.body);
})

app.listen(8080, () => {
	console.log('express server running at http://127.0.0.1:8080')
})
