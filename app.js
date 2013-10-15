'use strict';
var fs     = require('fs');
var config = require('./config');

/*
* app initialize
*/
if (!fs.existsSync(__dirname + '/upload')) {
  fs.mkdirSync('upload');
}

//mongodb(mongoose)
var mongoose = require('mongoose');
mongoose.connect(config.mongo.connectUrl);
var mongoConnection = mongoose.connection;
mongoConnection.on('error', console.error.bind(console, 'mongodb connection error:'));
mongoConnection.once('open', function () { console.log('mongodb connection open') });

//express
var express = require('express');
var app     = express();
var route   = require('./route');

app.use(express.bodyParser({ uploadDir: './upload' }));
app.use(express.cookieParser());
app.use(express.cookieSession({ secret: 'node-app-seed', cookie: { maxAge: 7*24*60*60*1000 } }));

route(app);
app.listen(config.port);
console.log('server start on port:', config.port);
