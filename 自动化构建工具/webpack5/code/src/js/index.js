import '../css/a.css'
import '../css/b.css'

/*
  1.eslint不认识window、navigator全局变量
 解决：需要修改package.json中eslintConfig的配置
     "env": {
      "browser": true
    }
2.sw代码必须运行在服务器上
-->nodejs
-->npm i serve -g
-->serve -s build
 */
//注册serviceworker，处理兼容性问题
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then(() => {
				console.log('sw注册成功')
			})
			.catch(() => {
				console.log('sw注册失败')
			})
	})
}
