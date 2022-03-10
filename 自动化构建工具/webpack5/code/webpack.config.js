//语法涉及到es6解构赋值
const { resolve } = require('path') // node 内置核心模块，用来处理路径问题。
const HtmlWebpackPlugin = require('html-webpack-plugin')
//提取css成单独文件插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
/**
 * PWA: 渐进式网络开发应用程序（可以离线访问）
 * workbox-->workbox-webpack-plugin
 */
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const webpack = require('webpack')
const AddSssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

// 设置nodejs环境变量,决定在不同环境下，一些脚本工具的行为，设置了这个之后，不会自动设置mode
//默认值是production(压缩和分离)
process.env.NODE_ENV = 'development'

//复用loader
// const commonCssLoader = [
//     MiniCssExtractPlugin.loader,
//     'css-loader',
//     {
//         loader: 'postcss-loader',
//         options: {
//             ident:'postcss',
//             plugins: require('postcss-preset-env')()
//         }
//     }
// ]
module.exports = {
	//1.入口
	entry: './src/js/index.js', //单个路口的写法
	output: {
		//2.输出
		//[name]为built
		filename: './built.js', //输出文件名
		path: resolve(__dirname, 'build'), //输出路径
		publicPath: '/', //所有资源引入要加的公共路径前缀
		chunFilename: 'js/[name]_chunk.js', //非入口chunk名称(import,optimization)
		// library: '[name]'//整个库向外暴露的变量名
	},

	// entry: {
	// 	//多个路口,多个bundle
	// 	main: './src/js/index.js',
	// 	test: './src/js/test.js',
	// },
	// output: {
	//     //[name]:取文件名
	// 	filename: 'js/[name].[contenthash:10].js',
	// 	path: resolve(__dirname, 'build'),
	// },
	// mode: 'production'//生产环境下自动压缩js代码
	mode: 'development', //3.开发环境
	// mode: 'production',//tree sharking(摇树)可以移除js文件中未引用的代码

	module: {
		rules: [
			//4.详细loader配置
			//(异步)先将css文件编程commonjs模块加载js中，再创建style标签,将js中的样式资源插入进行
			{
				//处理css资源
				test: /\.css$/,
				use: [
					// 'style-loader',
					//提取js中的css成单独文件
					MiniCssExtractPlugin.loader,
					//将css文件整合到js文件中
					'css-loader',
					{
						//css兼容性处理：postcss-->postcss-loader  postcss-preset-env
						loader: 'postcss-loader',
						//修改配置
						//帮postcss找到package.json中的browerslist里面的配置，通过配置加载指定的css兼容性样式
						//   "browserslist": {
						//     "development": [
						//       "last 1 chrome version",
						//       "last 1 firefox version",
						//       "last 1 safari version"
						//     ],
						//     "production": [//默认是生产环境
						//       ">0.2%",
						//       "not dead",
						//       "not op_mini all"
						//     ]
						//   }
						options: {
							postcssOptions: {
								ident: 'postcss',
								plugins: [
									//postcss的插件
									require('postcss-preset-env')(),
								],
							},
						},
					},
				],
			},

			{
				//处理图片资源
				test: /\.(jpg|png|gif)$/,
				loader: 'url-loader',
				options: {
					limit: 8 * 1024,
					name: '[hash:10].[ext]',
					//关闭es6模块化
					esModules: false,
					outputPath: 'imgs',
				},
			},
			{
				//处理html中img资源
				test: /\.html$/,
				loader: 'html-loader',
			},
			{
				exclude: /\.(html|js|css|less|jpg|png|gif)/,
				loader: 'file-loader',
				options: {
					name: '[hash:10].[ext]',
					outputPath: 'media',
				},
			},
			/*
            js语法检查：eslint-loader eslint只检查自己写的代码，不检查第三方
            设置检查规则：
            package.json中eslintconfig中设置
            "eslintConfig": {
                "extends": "airbnb-base"
            }
            airbnb-->eslint-config-airbnb-base eslint-plugin-import eslint
            */
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				//优先执行
				enforce: 'pre',
				options: {
					//指示babel做怎么样的兼容性处理
					presets: [
						[
							'@babel/preset-env',
							{
								//按需加载
								useBuiltIns: 'usage',
								//指定core-js版本
								corejs: {
									version: 3,
								},
								//指定兼容性做到哪个版本浏览器
								targets: {
									chrome: '60',
									firefox: '60',
									ie: '9',
									safari: '10',
									edge: '17',
								},
							},
						],
					],
					//开启babel缓存，第二次构建时，会读取之前的缓存
					cacheDirectory: true,
				},
				// {
				// loader: 'eslint-loader',//已经被弃用
				// //自动修复eslint的错误
				// options: {

				//     fix: true
				// },
				// },
			},
			{
				loader: 'thread-loader',
				options: {
					//开启多进程打包，进程启动和通信都要耗时，适用于工作量大的
					workers: 2, //在加载选项里面配置
				},
			},
		],
	},
	//5.插件plugins(解决loader不能完成的事)
	plugins: [
		//因为有属性和参数,需要创建new实例
		new HtmlWebpackPlugin({
			//复制这个文件，自动引入打包好输出的所有资源(JS和CSS)
			template: './src/index.html',
			//压缩html代码
			minify: {
				//移除空格
				collapseWhitespace: true,
				//移除注释
				removeComments: true,
			},
		}),
		new MiniCssExtractPlugin({
			//对输出的css文件进行重命名
			filename: 'css/built.css',
		}),
		//压缩css
		new OptimizeCssAssetWebpackPlugin(),
		new ESLintPlugin({
			extensions: ['js'],
			context: resolve('src'),
			exclude: '/node_modules',
			fix: true,
		}),
		new WorkboxWebpackPlugin.GenerateSW({
			/*
			  1.帮助serviceworker快速启动
			  2.删除旧的serviceworker
			 
			  生产一个serviceworker配置文件//缓存一些静态资源，下次离线访问还可以看到
			 */
			clientsClaim: true,
			skipWaiting: true,
		}),

		//告诉webpack哪些库不参与打包,同时使用的名称也要变
		new DllReferencePlugin({
			manifest: resolve(__dirname, 'dll/manifest.json'),
		}),
		//将某个文件打包输出去，并在html中自动引入该资源
		new AddAssetHtmlWebpackPlugin({
			filename: resolve(__dirname, 'dll/jquery.js'),
		}),

		//上面优化了重复打包的性能
	],
	//哪些库不打包(需要cdn引进)
	// externals: {
	// 	//jquery不被打包
	// 	jquery: 'jquery'
	// },
	// terget: 'node',//构建于服务器端
	// terget: 'web'//构建于浏览器端

	// 解析模块的规则
	resolve: {
		// 配置解析模块路径别名: 优点简写路径 缺点路径没有提示
		alias: {
			$css: resolve(__dirname, 'src/css'),
		},
		// 配置省略文件路径的后缀名
		extensions: ['.js', '.json', '.jsx', '.css'],
		// 告诉 webpack 解析模块是去找哪个目录
		modules: [resolve(__dirname, '../../node_modules'), 'node_modules'],
	},

	/*
    code split 代码分割
    1.多页面分别打包
    2.将第三方代码单独打包成一个chunk
    自动分析多入口chunk中，有没有公共的文件，如果有就会打包成单独公用的chunk
    避免重复加载
    3.通过js代码，import动态导入语法，让某个文件被单独打包成一个chunk
     */

	//懒加载需要用再加载，也是使用import动态导入语法
	//预加载(prefetch) 等其他资源加载完毕，空闲再加载其余资源,兼容性比较差
	//正常加载是并行加载
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		// 将当前模块的记录其他模块的 hash 单独打包为一个文件 runtime
		// 解决：修改 a 文件导致 b 文件的 contenthash 变化
		runtimeChunk: {
			name: (entrypoint) => `runtime-${entrypoint.name}`,
		},
		minimizer: [
			// 配置生产环境的压缩方案：js 和 css
			new TerserWebpackPlugin({
				// 开启缓存
				cache: true,
				// 开启多进程打包
				parallel: true,
				// 启动 source-map
				sourceMap: true,
			}),
		],
	},

	devServer: {
		//项目构建后保存路径
		contentBase: resolve(__dirname, 'build'),
		// 监视 contentBase 目录下的所有文件，一旦文件变化就会 reload
		watchContentBase: true,
		watchOptions: {
			// 忽略文件
			ignored: /node_modules/,
		},
		//启动gzip压缩
		compress: true,
		//端口号
		port: 3000,
		// 域名
		host: 'localhost',
		//自动打开浏览器
		open: true,
		//模块热替换(HMR),快速增删改部分模块
		//开启HMR功能,当修改webpack配置，新配置生效需要重启webpack服务
		hot: true,
		// 不要显示启动服务器日志信息
		clientLogLevel: 'none',
		// 除了一些基本启动信息以外，其他内容都不要显示
		quiet: true,
		// 如果出错了，不要全屏提示~
		overlay: false,
		// 服务器代理 --> 解决开发环境跨域问题
		proxy: {
			// 一旦 devServer(5000)服务器接受到 /api/xxx 的请求，就会把请求转发到另外一个服务器(3000)
			'/api': {
				target: 'http://localhost:3000',
				// 发送请求时，请求路径重写：将 /api/xxx --> /xxx （去掉/api）
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
	/*
    source-map: 一种提供源代码到构建后代码映射技术(如果构建后代码出错了，通过映射可以追踪源代码错误)
    [inline-|hideen-|eval-][nosources-][cheap-[module-]]
    */
	devtool: 'eval-source-map', //开发环境，速度快，调试友好
	// devtool: 'source-map'//生产环境用外部映射
}
