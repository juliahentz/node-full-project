/**
 * Created by juliahentz on 30/01/16.
 */

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir:'./assets/images' });

var gm = require('gm');

var mongoose = require('mongoose');

module.exports = function(app){

    app.get('/', function(req,res){

        res.render('landing/index', { title:'My landing page' });

    });

    //API routes

    app.post('/api/upload', multipartMiddleware, function(req,res){

        console.log('Body: ', req.body);
        console.log('Files: ', req.files);

        var path = req.files.file.path;

        var uniqueFilenameParts = path.split('/');
        var unitqueFilename = uniqueFilenameParts[uniqueFilenameParts.length-1];

        var thumbPath = './assets/thumbs/'+unitqueFilename

        gm(path)
            .resize(353, 257)
            .autoOrient()
            .write(thumbPath, function (err) {
                if (!err) console.log(' hooray! ');});

        res.sendStatus(200);

    });

    app.get('/api/projects', function(req, res){

        var Project = mongoose.model('Project');

        Project.find(function(err, docs){

            if(!err){
                res.send(docs);
            }else{
                res.send(err);
            }

        })

    });

};