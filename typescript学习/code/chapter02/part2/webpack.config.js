const path = require('path');
//引入html插件
const HTMLWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');

module.exports=
    {
        entry: "./src/index.ts",
        output: {
            path: path.resolve(__dirname,'dist'),
            filename: "bundle.js",
            //告诉webpack不使用箭头函数，ie兼容
            environment: {
                    arrowFunction: false
            }
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        //配置babel
                        {
                            //指定加载器
                            loader: "babel-loader",
                            options: {
                                //设置预定义的环境
                                presets: [
                                    [
                                        //指定环境的插件
                                        "@babel/preset-env",
                                        //配置信息
                                        {
                                            //要兼容的目标浏览器
                                            targets: {
                                                "chrome":"88",
                                            },
                                            //指定corejs版本
                                            "corejs":"3",
                                            //按需加载
                                            "useBuiltIns":"usage"
                                        }
                                    ]
                                ]
                            }
                        },
                        'ts-loader'
                    ],
                    exclude: /node-modules/
                },
                //设置less文件的处理
                {
                    test: /\.less$/,
                    use:[
                        "style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            "postcss-preset-env",
                                            {
                                                browsers: 'last 2 versions'
                                            }
                                        ]
                                    ]
                                }
                            }
                        },

                        "less-loader"
                    ]
                }
            ]
        },
        //配置webpack插件
        plugins: [
            new CleanWebpackPlugin(),
            new HTMLWebpackPlugin({
                // title: "这是一个自定义的title"
                template: "./src/index.html"
            }),
        ],
        resolve: {
        extensions: ['.ts','.js']
        }
    };
