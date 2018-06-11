const plugins = require('./plugins');
const rules = require('./rules');
const settings = require('./development.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// setting `mode` to production
settings.mode = 'production';

// removing source maps from production build
delete settings.devtool;

// delete devServer
delete settings.devServer;

// change output name to minified
settings.output.filename = 'js/[name].min.js';

// rules
settings.module.rules[0] = rules.css.production;

// optimization
settings.optimization = {
    minimizer: [
        plugins.uglify,
        new OptimizeCSSAssetsPlugin({}),
    ],
};

// extract css
settings.plugins.push(plugins.css);

module.exports = settings;
