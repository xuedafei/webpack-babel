const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/a.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[fullhash].js'
  },
  mode: 'none',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.jp(e)g$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 5,
            esModule: false
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/img/'),
          to: path.resolve(__dirname, 'dist/image/')
        }
      ]
    }),
    new HtmlWebpackPlugin({
      title: '呵呵呵',
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new webpack.DefinePlugin({
      NODE_ENV: "'development'"
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:8].css',
      chunkFilename: '[id].css'
    })
  ],
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 9000,
  },
};
