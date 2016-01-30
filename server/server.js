var express = require('express');
var app = express();

var serveIndex = require('serve-index');
var serveStatic = require('serve-static');

var router = require('./router')

var port = process.env.PORT || 3000;

exports.start = function(){

    app.set('view engine', 'ejs');

    app.use('/assets', serveStatic('assets'));
    app.use('/cms-dev', serveStatic('cms-dev'));
    app.use('/cms', serveStatic('cms-dev/dist'));
    app.use('/assets', serveIndex('assets'));

    app.listen(port, function(){

        console.log('Server is runnign on port '+port);

        router(app);

    });

};

exports.stop = function(){



};