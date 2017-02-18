var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Tab Saver - Chrome Extension',
        host: req.header('host')
    });
});

module.exports = router;
