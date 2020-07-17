//webpack.config.js
// Connect outline modules
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
// Indicate entry and output - entry point and final bundle name
    entry: {
        main: './collector/index.js',
        form_element: './collector/index.js',
        cards: './collector/index.js',
        headers_footers: './collector/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "pages"),
    },
    module: {
        rules: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.pug$/, use: ['html-loader', 'pug-html-loader']},
            {
                test: /\.s[ac]ss$/i, 
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Form Element",
            template: './collector/index.pug',
            path: './pages/form-element.html'
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
    ],
    mode: "development",
    devServer: {
        contentBase: './pages',
    }
}