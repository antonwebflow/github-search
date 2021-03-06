const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const path = require('path');
const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
  devServer: {
    open: false,
  },
  entry: APP_PATH,
  devtool: 'inline-source-map',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(APP_PATH, 'index.html'),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new Dotenv({
      safe: true,
      allowEmptyValues: true,
    }),
  ],
};
