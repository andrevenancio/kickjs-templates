module.exports = {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
        presets: ['react'],
    },
};
