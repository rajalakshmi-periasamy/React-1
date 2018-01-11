const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const app = express();
const compiler = webpack(webpackConfig);

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: webpackConfig.output.publicPath + 'build',
    stats: {
        colors: true
    },
    historyApiFallback: true
}));

const server = app.listen(3000, function() {
    const port = server.address().port;
    console.log('Sample app listening at http://localhost:%s', port);
});