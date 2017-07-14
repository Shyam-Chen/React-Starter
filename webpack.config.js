const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const comment = require('postcss-comment');
// const pimport = require('postcss-import');
// const cssnext = require('postcss-cssnext');
// const rucksack = require('rucksack-css');
// const url = require('postcss-url');
// const cssnano = require('cssnano');

module.exports = {
  context: join(__dirname, 'src'),
  entry: {
    main: './main.js'
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    inline: true,
    port: 8000,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
};
