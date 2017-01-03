const express = require('express');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(3050, () => console.log('Listening'));
