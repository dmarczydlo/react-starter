const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "3000";

loaders.push({
    exclude: ['node_modules'],
    loaders: [
        'style-loader',
        'css-loader?importLoaders=1',
        'sass-loader'
    ],
    test: /\.scss$/
});

module.exports = {
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        host: HOST,
        hot: true,
        inline: true,
        noInfo: true,
        port: PORT
    },
    devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
    entry: [
        'react-hot-loader/patch',
        './src/index.jsx'
    ],
    module: {
        rules: loaders
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            allChunks: true,
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            files: {
                css: ['style.css'],
                js: ["[chunkhash].js"]
            },
            template: './public/index.html'
        })
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    }
};
