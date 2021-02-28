var path = require('path');  
  module.exports = {
    /**
     * Webpack资源入口，表示它是从哪个JS文件开始打包的。Webpack要找到这个文件，是通过context和entry这两个参数
     * context是一个绝对路径，是基础目录的意思。entry一般是一个相对路径，它与context拼接起来，就是Webpack打包的入口文件了
     * context不设置默认为项目根目录
     * entry可以是字符串、数组、对象、函数
     */
    entry: './a.js',
    /** output就是资源出口配置项。output是一个对象，它有几个重要的属性filename、path、publicPath和chunkFilename */
    output: {
      path: path.resolve(__dirname, ''),
      filename: 'bundle1.js'
    },
    mode: 'none',
    module: {
      rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }]
    }
  };
