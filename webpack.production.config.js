const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const {resolve} = require('path');

loaders.push({
    exclude: [/node_modules/],
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?-minimize?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=compressed'
    }),
    test: /\.scss$/
},
{
    exclude: [/node_modules/],
    loader: 'babel-loader',
    test: /\.js$/
}
);

module.exports = {
    devtool: 'source-map',
    entry: [
        '@babel/polyfill',
        './src/index.jsx',
        './src/style/index.scss'
    ],
    module: {rules: loaders},
    optimization: {minimize: true},
    output: {
        filename: '[chunkhash].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    performance: {
        hints: process.env.NODE_ENV === 'production'
            ? 'warning'
            : false
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                BABEL_ENV: JSON.stringify('production'),
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin({
            allChunks: true,
            filename: 'style.[chunkhash].css'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new CompressionPlugin({
            algorithm: 'gzip',
            compressionOptions: {level: 1},
            filename: '[path].gz[query]',
            minRatio: 0,
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240
        }),
        new HtmlWebpackPlugin({
            files: {
                css: ['style.css'],
                js: ['[chunkhash].js']
            },
            template: './public/index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: resolve(__dirname, 'public/pwa/'),
                to: resolve(__dirname, 'dist/')
            }
        ]),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            swDest: 'sw.js'
        })
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    }
};
