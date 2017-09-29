const path = require('path');

const PATH_SOURCE = './src';
const PATH_DIST = './public';
const PATH_DLL = path.join(__dirname, 'dll');
const VERSION = JSON.stringify(require('./package.json').version);

module.exports = {
    VERSION,
    PATH_SOURCE,
    PATH_DIST,
    PATH_DLL,
};
