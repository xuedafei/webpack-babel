const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const { resolve } = require('./utils.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: resolve('../dist/index.html'),
      template: 'index.html',
    }),
  ]
});