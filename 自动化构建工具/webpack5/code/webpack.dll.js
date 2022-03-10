/*
使用时需要执行 webpack --config webpack.dll.js
*/
const {resolve} = resolve('path')
const webpack = require('webpack')
module.exports = {
	entry: {
		//代表最终打包生产的[name]-->jquery
		//['jquery']表示要打包的库是jquery
		jquery: ['jquery'],
	},
	output: {
		filename: '[name].js',
		path: resolve(__dirname, 'dll'),
		library: '[name]_[hash:10]', //打包的库向外暴露出去的名字
	},
	plugins: [
		//打包生产一个manifest.json-->提供jquery映射
		new webpack.DllPlugin({
			name: '[name]_[hash:10]', //映射库的暴露的内容名称
			path: resolve(__dirname, 'dll/manifest.json'), //输出文件路径
		}),
	],
}
