var path = require('path');  
  module.exports = {
    entry: './a.js',
    output: {
      path: path.resolve(__dirname, ''),
      filename: 'bundle1.js'
    },
    mode: 'none'
  };
