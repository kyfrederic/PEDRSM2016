var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname+ '/public')); 
app.use(bodyParser.urlencoded());
app.set('views', __dirname + '/views');

exports.app=app;
