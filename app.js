/**
 * @project     tab-saver.com
 * @author      Kostyantyn Didenko <kdidenko@ito-global.com>
 * @date        06.12.2016 11:17
 * @copyright   Copyright (C) 2008 - 2016 ITO-Global, LLC. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})