const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const {
    PATH_SOURCE,
    PATH_DIST,
    PATH_DLL,
} = require('./webpack.config');

module.exports = {
    entry: {
        vendor: [path.join(__dirname, PATH_SOURCE, 'vendors.js')],
    },
    output: {
        path: path.join(__dirname, PATH_DIST),
        filename: 'dll.[name].js',
        library: '[name]',
    },
    plugins: [
        new CleanWebpackPlugin([PATH_DLL]),
        new webpack.DllPlugin({
            path: path.join(PATH_DLL, '[name]-manifest.json'),
            name: '[name]',
            context: path.resolve(__dirname, PATH_SOURCE),
        }),
    ],
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
};
