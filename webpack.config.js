const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const src = path.resolve(__dirname, 'src');
const build = path.resolve(__dirname, 'build');

const port = 8080;

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        `webpack-dev-server/client?http://127.0.0.1:${port}`,
        path.resolve(src, 'index.js'),
    ],
    output: {
        path: build,
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpg|gif|jpeg|bmp)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/img/[name].[ext]'
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(src, 'index.html'),
        }),
    ],
    devServer: {
        inline: true,
        contentBase: build,
        publicPath: '/',
        historyApiFallback: true,
        port,
    },
};
