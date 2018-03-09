const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {resolve} = require('path');

loaders.push({
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader?-minimize?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=compressed'
        }),
        exclude: ['node_modules']
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }
);

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.jsx',
        './src/style/index.scss'
    ],
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: '[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: loaders
    },
    devtool: 'source-map',
    optimization: {
        minimize: true
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                BABEL_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin({
            filename: 'style.[chunkhash].css',
            allChunks: true
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            files: {
                css: ['style.css'],
                js: ['[chunkhash].js']
            }
        }),
        new OfflinePlugin({
            ServiceWorker: {
                minify: false
            }
        }),
        new CopyWebpackPlugin([{
            from: resolve(__dirname, 'public/pwa/'),
            to: resolve(__dirname, 'dist/')
        }])
    ]
};
