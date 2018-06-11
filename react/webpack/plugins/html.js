const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const {
    PATH_DIST,
    PATH_SOURCE,
} = require('../webpack.config.js');

module.exports = new HtmlWebpackPlugin({
    filename: path.join(PATH_DIST, 'index.html'),
    template: path.join(PATH_SOURCE, 'index.ejs'),
    inject: false,
});
