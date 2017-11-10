const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: join(__dirname, 'src'),
  entry: {
    client: './client.js'
  },
  output: {
    path: join(__dirname, 'build'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
          //   loader: 'react-hot-loader/webpack',
          // }, {
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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ],
  devServer: {
    contentBase: join(__dirname, 'build'),
    // disableHostCheck: true,
    historyApiFallback: true,
    // host: '0.0.0.0',
    // hot: true,
    inline: true,
    port: 8000
  },
  devtool: 'source-map'
};
