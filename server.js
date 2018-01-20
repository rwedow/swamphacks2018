const bodyParser = require('body-parser');
const express = require('express');
const setTimeout = require('timers');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const webpackConfig = require('./webpack.config');

const app = express();
const compiler = webpack(webpackConfig);

const HOST = 'localhost';
const PORT = 8080;

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true
  },
  historyApiFallback: true
}));

// Tell the application the default location of the html and bundle files
app.use(express.static(__dirname + '/www'));

// Set up bodyParser
app.use(bodyParser.json());

const server = app.listen(PORT, function() {
  const host = HOST;
  const port = PORT;
  console.log(`Listening on http://${HOST}:${PORT}`);
});