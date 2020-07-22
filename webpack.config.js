//webpack.config.js
// Connect outline modules
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
// Indicate entry and output - entry point and final bundle name
    entry: {
        main: '@/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {   test: /\.pug$/, use: ['html-loader', 'pug-html-loader'] },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin,'css-loader']
            },            
            {
                test: /\.s[ac]ss$/i, 
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Form Element",
            template: path.resolve(__dirname, 'src/index.pug'),
            filename: 'index.html',
            mode: 'development'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
        
    ],
    mode: "development",
    devServer: {
        contentBase: '@/dist',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': './src/components',
            '@dist': './dist'
        }
    }
}