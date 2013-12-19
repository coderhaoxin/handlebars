var config      = require('./config')
var etag        = require('koa-etag')
var session     = require('koa-session')
var staticCache = require('koa-static-cache')
var koa         = require('koa')
var app         = koa()

/*
* dir initialize
*/
var fs = require('fs')
if (!fs.existsSync('./upload')) {
	fs.mkdirSync('upload')
}

/*
* app config
*/
app.use(etag())
app.use(staticCache('./static', { maxAge: 1000 }))
// app.use(session)

/*
* route
*/
var route = require('./route')
route(app)

app.listen(config.port)
console.log('server start on port: ', config.port)
