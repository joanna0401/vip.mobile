// webpack的配置文件，配置文件是一个模块
module.exports = {
    // 生成source-map,方便浏览器调试
    devtool: "source-map",
    // 入口文件
    entry: './dist/main.js',
    // 输出文件的文件名
    output: {
        path: __dirname + '/dist/js',
        filename: 'bundle.js'
    },
    // 服务器相关配置
    devServer: {
        contentBase: "./", //本地服务器所加载的页面所在的目录
    },
    module: {
        loaders: [
            // 解析CSS样式，将CSS样式写入到js中，加入到页面中
            { test: /\.css$/, loader: "style-loader!css-loader" },
            // 解析很小的图片为base64
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader?limit=8192&name=./[name].[ext]?[hash]"
            },
            // 解析scss（需要node-sass,下载不成功，使用cnpm下载）
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            // 解析ES6语法(babel-loader/babel-core)
            { test: /\.js$/, loader: "babel-loader" },
        ]
    }
}
