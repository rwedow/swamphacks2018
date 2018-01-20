const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve('./www/index.html'), // + '/www/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: path.resolve('./src/app.js'), // + '/src/app.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./www') // + '/www'
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};