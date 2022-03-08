//导入mysql模块
const mysql = require('mysql')
//建立与MySql数据库之间的连接
const db = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: '1122',
	database: 'my_db_01',
})
// //select 1测试是否连接成功
// db.query('SELECT 1',(err,results)=>{
//     if(err)return console.log(err.message);
//     //[RowDataPacket{'1':1}]证明连接成功
//     console.log(results);
// })

// 定义一个sql语句
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, results) => {
// 	if (err) return console.log(err.message)
// 	//如果执行的是select查询语句，则返回的结果是数组
// 	console.log(results)
// })

// const user = { username: 'Spider-Man', password: 'pcc321' }
// const sqlStr1 = 'insert into users (username,password) values (?,?)'
// db.query(sqlStr1, [user.username, user.password], (err, results) => {
// 	if (err) return console.log(err.message) //插入失败
// 	if (results.affectedRows === 1) {//被影响的行数=1
// 		console.log('插入数据成功')
// 	}
// })
// const user = { username: 'Spider-Man2', password: 'pcc321' }
// const sqlStr1 = 'insert into users set ?'
// db.query(sqlStr1, user ,(err, results) => {
// 	if (err) return console.log(err.message) //插入失败
// 	if (results.affectedRows === 1) {
// 		console.log('插入数据成功')
// 	}
// })
// const user = { id:6, username: 'abcc', password: 'pcc3wd21' }
// const sqlStr = 'update users set username=?,password=?where id=?'
// db.query(sqlStr, [user.username,user.password,user.id], (err, results) => {
// 	if (err) return console.log(err.message) //失败
// 	if (results.affectedRows === 1) {
// 		console.log('更新数据成功！')
// 	}
// })
// const user = { id: 6, username: 'abcd', password: 'pcc3wd21' }
// const sqlStr = 'update users set ?where id=?'
// db.query(sqlStr, [user,user.id], (err, results) => {
// 	if (err) return console.log(err.message) //失败
// 	if (results.affectedRows === 1) {
// 		console.log('更新数据成功！')
// 	}
// })
// const sqlStr = 'delete from users where id=?'
// db.query(sqlStr, 6, (err, results) => {
// 	if (err) return console.log(err.message) //失败
// 	if (results.affectedRows === 1) {
// 		console.log('删除数据成功')
// 	}
// })

//标记删除，使用update语句替代delete语句，只更新数据的状态，并没有真正删除
//status=1表示该数据被禁用
db.query('update users set status=1 where id=?', 5, (err, results) => {
	if (err) return console.log(err.message) //失败
	if (results.affectedRows === 1) {
		console.log('删除数据成功')
	}
})
