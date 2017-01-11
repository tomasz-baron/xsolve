var express = require('express'),
    cors = require('cors');
 
var app = express();
app.use(cors());
 
app.use('/api', require('./instagram.js'));
 
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
 
var server = app.listen(3000, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
