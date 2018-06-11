const webpack = require('webpack');

const { VERSION } = require('../webpack.config.js');

module.exports = new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(VERSION),
    __NODE_ENV__: JSON.stringify(process.env.NODE_ENV || 'development'),
    __PRODUCTION__: process.env.NODE_ENV === 'production',
});
