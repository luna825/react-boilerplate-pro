const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');

const ENV = process.env.NODE_ENV || 'development';
const VERSION = `v${pkg.version}`;
const IS_PROD = ENV === 'production';
const ASSET_PATH = process.env.ASSET_PATH || '/';

const SOURCE_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'build');
const CLIENT_DIR = path.join(OUTPUT_DIR, VERSION);

module.exports = {
  mode: ENV,
  context: SOURCE_DIR,
  target: 'web',
  entry: {
    client: './index.js',
  },
  output: {
    filename: '[name].[hash:8].js',
    publicPath: ASSET_PATH,
    path: CLIENT_DIR,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React App Pro',
      filename: './index.html',
      template: './index.ejs',
    }),
  ],
  devtool: IS_PROD ? 'source-map' : 'eval-source-map',
  devServer: {
    port: process.env.PORT || 8080,
    host: 'localhost',
    publicPath: '/',
    contentBase: SOURCE_DIR,
    historyApiFallback: true,
  },
};
