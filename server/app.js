'use strict';

var config  = require('./config')
var express = require('express')
var app     = express()
var route   = require('./route')

/*
* dir initialize
*/
var fs = require('fs')
if (!fs.existsSync('./upload')) {
  fs.mkdirSync('upload')
}

/*
* express
*/
app.use(express.cookieParser())
// app.use(express.cookieSession({ secret: 'node-app-seed', cookie: { maxAge: 15*24*60*60*1000 } }));
app.use(express.bodyParser({ uploadDir: './upload' }))

// redis session
var RedisStore = require('connect-redis')(express)
app.use(express.session({ secret: 'node-app-seed', store: new RedisStore(config.redis) }))

// route
route(app)

app.listen(config.port)
console.log('server start on port:', config.port)
