const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const {
    PATH_DIST,
    PATH_DLL,
    PATH_SOURCE,
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
        new CleanWebpackPlugin([PATH_DIST, PATH_DLL], { verbose: false }),
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
                collapseInlineTagWhitespace: false,
                collapseWhitespace: true,
                minifyCSS: true,
            },
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ],
};
