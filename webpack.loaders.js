module.exports = [
    {
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
        test: /\.jsx?$/
    },
    {
        exclude: ['node_modules'],
        loaders: [
            'style-loader',
            'css-loader?importLoaders=1'
        ],
        test: /\.css$/
    },
    {
        exclude: /(node_modules|bower_components)/,
        loader: 'file-loader',
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/
    },
    {
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?prefix=font/&limit=5000',
        test: /\.(woff|woff2)$/
    },
    {
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/
    },
    {
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/
    },
    {
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?limit=10000&mimetype=image/gif',
        test: /\.gif/
    },
    {
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg',
        test: /\.jpg/
    },
    {
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?limit=10000&mimetype=image/png',
        test: /\.png/
    }
];
