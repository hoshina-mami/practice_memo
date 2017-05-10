/*
  参考：
  webpack2はじめました
  http://qiita.com/vnc/items/acda2c56d6c3bfb37190

  Webpack + React + ES6の最小構成を考えてみる。
  http://uraway.hatenablog.com/entry/2015/12/25/Webpack_%2B_React_%2B_ES6%E3%81%AE%E6%9C%80%E5%B0%8F%E6%A7%8B%E6%88%90%E3%82%92%E8%80%83%E3%81%88%E3%81%A6%E3%81%BF%E3%82%8B%E3%80%82

*/


var path = require('path');
var webpack = require('webpack');

module.exports = [
  {
    entry: ['./src/js/index.js'],  //元ネタのjsファイルパス
    output: {
      filename: 'bundle.js', // 出力する時のファイル名（お好みで）
      path: path.resolve(__dirname, 'dist')  //出力先のディレクトリパスを指定。（__dirnameは多分rootのことを指してるんじゃないかな…）←多分
    },
  },
  {
    entry: './src/js/main.jsx',
    output: {
      path: path.join(__dirname, 'dist/js/'),
      filename: 'memo.js'
    },
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
  }
];