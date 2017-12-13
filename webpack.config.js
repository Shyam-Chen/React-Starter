const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = ({ prod = false } = {}) => ({
  context: join(__dirname, 'src'),
  entry: {
    client: './client.js'
  },
  output: {
    path: join(__dirname, 'build'),
    filename: prod ? '[name].[hash].js' : '[name].js'
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
              babelrc: false,
              presets: [
                [
                  'env', {
                    'targets': {
                      'browsers': ['last 2 versions']
                    }
                  }
                ],
                'react',
                'flow'
              ],
              plugins: [
                'transform-runtime',
                [
                  'styled-jsx/babel', {
                    plugins: [
                      "styled-jsx-plugin-postcss"
                    ]
                  }
                ],
                'transform-class-properties',
                'transform-function-bind',
                'transform-object-rest-spread',
                [
                  'babel-plugin-root-import', [
                    {
                      rootPathPrefix: '~',
                      rootPathSuffix: 'src/app'
                    }
                  ]
                ],
                [
                  'transform-imports', {
                    'material-ui': {
                      transform: 'material-ui/${member}',
                      preventFullImport: true
                    },
                    'rxjs': {
                      transform: 'rxjs/${member}',
                      preventFullImport: true,
                      skipDefaultConversion: true
                    },
                    'rxjs/observable': {
                      transform: 'rxjs/observable/${member}',
                      preventFullImport: true,
                      skipDefaultConversion: true
                    },
                    'rxjs/operator': {
                      transform: 'rxjs/operator/${member}',
                      preventFullImport: true,
                      skipDefaultConversion: true
                    }
                  }
                ]
              ]
            }
          }
        ]
      }, {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      }, {
        test: /\.(eot|woff2?|svg|ttf)$/,
        use: 'file-loader'
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
        'API_URL': JSON.stringify('https://web-go-demo.herokuapp.com')
      }
    }),
    prod && new UglifyJSPlugin({ sourceMap: false }),
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
  devtool: 'source-map'
});
