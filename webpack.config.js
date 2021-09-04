'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/assets/js/app.js',
    vendor: './src/assets/js/vendor.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist/assets/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }  

};
