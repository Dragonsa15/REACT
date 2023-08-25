const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path'); // nodejs built-in
module.exports = function () {
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.[contenthash:8].js"
        },
        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })],
        devServer: {
            compress: true,
            port: 3000,
        },
        devtool: "cheap-module-source-map",
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use:  ["style-loader", "css-loader"]
                }
            ]
        }
    }
}