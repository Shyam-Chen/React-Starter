const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const scss = require('postcss-scss');
const pimport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const rucksack = require('rucksack-css');
const url = require('postcss-url');
const cssnano = require('cssnano');

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
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              parser: scss,
              plugins: [
                pimport(),
                cssnext({ warnForDuplicates: false }),
                rucksack({ autoprefixer: true }),
                url(),
                cssnano()
              ]
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ],
  devServer: {
    contentBase: join(__dirname, 'dist'),
    historyApiFallback: true,
    inline: true,
    port: 8000,
  },
  devtool: 'source-map',
};
