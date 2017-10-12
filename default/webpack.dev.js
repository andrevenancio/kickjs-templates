const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const {
    PATH_DIST,
    PATH_SOURCE,
    VERSION,
} = require('./webpack.config');

module.exports = {
    cache: true,
    devtool: 'eval',
    target: 'web',

    entry: {
        app: path.join(__dirname, PATH_SOURCE, 'index.js'),
    },

    output: {
        path: path.join(__dirname, PATH_DIST),
        filename: '[name].js',
        chunkFilename: '[name].js',
    },

    devServer: {
        contentBase: path.join(__dirname, PATH_DIST),
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [],
                },
            },
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            __VERSION__: VERSION,
            __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
            __PRODUCTION__: JSON.stringify(process.env.NODE_ENV) === 'production',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(new RegExp('^(fs|ipc)$')),
        new WriteFilePlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.ejs',
            inject: false,
        }),
    ],
};
