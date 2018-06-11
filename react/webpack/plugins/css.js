const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = new MiniCssExtractPlugin({
    filename: 'css/style.css',
    chunkFilename: '[id].css',
});
