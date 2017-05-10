var path = require('path');
var webpack = require('webpack');
module.exports = [
  {
    entry: ['./webcontent/js/index.js'],  //元ネタのjsファイルパス
    output: {
      filename: 'bundle.js', // 出力する時のファイル名（お好みで）
      path: path.resolve(__dirname, 'dist')  //出力先のディレクトリパスを指定。（__dirnameは多分rootのことを指してるんじゃないかな…）←多分
    },
  },
];