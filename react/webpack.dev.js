const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
    PATH_SOURCE,
    PATH_DIST,
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
    plugins: [
        new webpack.DefinePlugin({
            __VERSION__: VERSION,
            __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
            __PRODUCTION__: JSON.stringify(process.env.NODE_ENV) === 'production',
        }),
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, PATH_SOURCE),
            manifest: path.join(__dirname, 'dll/vendor-manifest.json'),
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${PATH_SOURCE}/index.ejs`,
            inject: false,
        }),
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
    devServer: {
        contentBase: path.join(__dirname, PATH_DIST),
        compress: true,
        historyApiFallback: true,
        https: false,
        noInfo: true,
    },
};
