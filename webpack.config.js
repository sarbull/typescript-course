const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const config = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [ {test: /\.ts?$/, use: 'ts-loader' } ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new webpack.ProvidePlugin({ _: 'lodash' })
  ]
};

module.exports = config;
