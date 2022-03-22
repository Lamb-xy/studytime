const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()
app.use(history())
app.use(express.static(__dirname+'/static'))
const port = 5000
app.get('/person', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))