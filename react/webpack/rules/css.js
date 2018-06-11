/* you can use `import './style.css'` with this rule */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    dev: {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader',
        ],
    },
    production: {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
        ],
    },
};
