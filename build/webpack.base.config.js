const { resolve } = require('./utils.js');

module.exports = {
  mode: 'development',
  entry: {
    app: '/src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve('../dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
    ]
  },
};
