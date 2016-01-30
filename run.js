var server = require('./server/server');
var database = require('./server/database');

function init(){

    database.connect(function(){

        server.start();
        require('./server/models/project');

    });

}

init();