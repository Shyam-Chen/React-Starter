const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const API_URL = 'https://web-go-demo.herokuapp.com';

module.exports = ({ prod = false } = {}) => ({
  context: join(__dirname, 'src'),
  entry: {
    client: './client.js'
  },
  output: {
    path: join(__dirname, 'build'),
    chunkFilename: prod ? '[name].[hash].js' : '[name].js',
    filename: prod ? '[name].[hash].js' : '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ].filter(Boolean)
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(prod ? 'production' : 'development'),
        'API_URL': JSON.stringify(API_URL)
      }
    }),
    prod && new UglifyJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        ecma: 5,
        warnings: false,
        ie8: false,
        mangle: true,
        compress: {
          pure_getters: true,
          passes: 3
        },
        output: {
          ascii_only: true,
          comments: false
        }
      }
    }),
    !prod && new webpack.NamedModulesPlugin(),
    !prod && new webpack.HotModuleReplacementPlugin()
  ].filter(Boolean),
  devServer: {
    contentBase: join(__dirname, 'build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8000
  },
  devtool: prod ? 'hidden-source-map' : 'eval-source-map'
});
