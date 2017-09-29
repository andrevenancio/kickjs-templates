const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
    PATH_SOURCE,
    PATH_DIST,
    VERSION,
} = require('./webpack.config');

module.exports = {
    cache: true,
    devtool: 'cheap-module-source-map',
    target: 'web',
    entry: {
        app: [path.join(__dirname, PATH_SOURCE, 'vendors.js'), path.join(__dirname, PATH_SOURCE, 'index.js')],
    },
    output: {
        path: path.join(__dirname, PATH_DIST),
        filename: '[name].min.js',
        chunkFilename: '[name].min.js',
    },
    plugins: [
        new CleanWebpackPlugin([PATH_DIST]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
            __VERSION__: VERSION,
            __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
            __PRODUCTION__: process.env.NODE_ENV === 'production',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${PATH_SOURCE}/index.ejs`,
            inject: false,
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
            },
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ],
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                include: [
                    path.join(__dirname, PATH_SOURCE),
                ],
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-class-properties'],
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
};
