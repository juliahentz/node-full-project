var express = require('express');
var app = express();

var serveIndex = require('serve-index');
var serveStatic = require('serve-static');

var port = process.env.PORT || 3000;

exports.start = function(){

    app.use('/', serveStatic('public'));
    app.use('/', serveIndex('public'));

    app.listen(port, function(){

        console.log('Server is runnign on port '+port);

    });

};

exports.stop = function(){



};