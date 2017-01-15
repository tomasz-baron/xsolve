var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/media', function(req, res, next) {
    var max_id = (req.query.max_id) ? '?max_id=' + req.query.max_id : '';
    request({
        url: 'https://www.instagram.com/xsolvesoftware/media' + max_id,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(body)
        } else {
            res.send({});
        }
    }) 
});

module.exports = router;