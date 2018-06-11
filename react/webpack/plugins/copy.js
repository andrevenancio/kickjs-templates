const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const {
    PATH_STATIC,
    PATH_DIST,
} = require('../webpack.config.js');

module.exports = new CopyWebpackPlugin([{
    from: path.join(PATH_STATIC), to: PATH_DIST,
}]);
