const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = new UglifyWebpackPlugin({
    uglifyOptions: {
        compress: true,
        output: {
            comments: false,
            beautify: false,
        },
    },
});
