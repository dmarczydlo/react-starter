const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const copyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-notifier');
const autoprefixer = require('autoprefixer');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const isProd = (process.env.NODE_ENV === 'production');

const base = {
    entry: path.join(APP_DIR, 'index.jsx'),
    devServer: {
        compress: true,
        port: 3000,
        proxy: {
            "/api": "http://localhost:3001"
        }
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'},
                ],
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: APP_DIR,
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        copyWebpackPlugin([
            {
                from: 'public/index.html',
                to: 'index.html',
                force: true,
            },
        ]),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: ['last 3 versions', '> 1%'],
                    }),
                ],
            },
        }),
        new WebpackBuildNotifierPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isProd ? JSON.stringify('production') : JSON.stringify('development'),
            },
        }),
    ],
};

const dev = {
    devtool: 'source-map',
};

const prod = {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
    ],
};

module.exports = isProd ? merge(base, prod) : merge(base, dev);
