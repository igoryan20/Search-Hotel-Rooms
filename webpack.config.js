//webpack.config.js
// Connect outline modules
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
// Indicate entry and output - entry point and final bundle name
    entry: './collector/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "pages")
    },
    module: {
        rules: [
            // Add loaders for CSS
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.pug$/, use: ['html-loader', 'pug-html-loader']}
        ]
    },
     plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './collector/index.pug',
            inject: false
        })
    ]
}