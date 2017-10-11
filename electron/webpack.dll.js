const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const {
    PATH_DIST,
    PATH_DLL,
    PATH_SOURCE,
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

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react'],
                },
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin([PATH_DIST, PATH_DLL]),
        new webpack.DllPlugin({
            path: path.join(PATH_DLL, '[name]-manifest.json'),
            name: '[name]',
            context: path.resolve(__dirname, PATH_SOURCE),
        }),
    ],
};
