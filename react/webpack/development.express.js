const path = require('path');

const { PATH_SOURCE } = require('./webpack.config');
const settings = require('./development.js');

settings.entry.app = [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    path.join(PATH_SOURCE, 'index.js'),
];

module.exports = settings;
