/*
  参考：
  http://qiita.com/vnc/items/acda2c56d6c3bfb37190
  http://uraway.hatenablog.com/entry/2015/12/25/Webpack_%2B_React_%2B_ES6%E3%81%AE%E6%9C%80%E5%B0%8F%E6%A7%8B%E6%88%90%E3%82%92%E8%80%83%E3%81%88%E3%81%A6%E3%81%BF%E3%82%8B%E3%80%82
  http://qiita.com/Mic-U/items/d222a677d80a5ab46e2c
  http://qiita.com/keitaMatsuo/items/65d7a613918747930be9
  http://qiita.com/yasuno0327/items/542257ef854175193e48

*/


var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");
var precss = require("precss");

module.exports = [
  //js
  {
    entry: './src/js/main.jsx',
    output: {
      path: path.join(__dirname, 'dist/js/'),
      filename: 'memo.js'
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    devtool: 'source-map'
  },

  //scss
  {
    entry: {
      style: path.join(__dirname, "src/scss/main.scss")
    },
    output: {
      path: path.join(__dirname, 'dist/css/'),
      filename: '[name].css'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "postcss-loader"]
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "postcss-loader", "sass-loader"]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css')
    ],
    devtool: 'source-map'
  }
];