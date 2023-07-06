const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "examples/src/index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        // 定义打包后文件的名称；
                        // [name]:原文件名，[hash]:hash字符串（如果不定义名称，默认就以hash命名，[ext]:原文件的后缀名）
                        name: '[name]_[hash].[ext]',
                        outputPath: 'assets/' //  定义图片输出的文件夹名（在output.path目录下）
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "examples/src/index.html"),
            filename: "./index.html"
        }), new CleanWebpackPlugin(),],
    devServer: {
        port: 3019
    }
};