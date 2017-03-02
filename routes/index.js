var express = require('express');
var router = express.Router();
var config = require('config');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Tab Saver v2.0 - Launch is soon!',
        host: config.get('host')
    });
});

module.exports = router;
