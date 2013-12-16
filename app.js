var config      = require('./config')
var etag        = require('koa-etag')
var session     = require('koa-session')
var staticCache = require('koa-static-cache')
var view        = require('co-views')
var koa         = require('koa')
var router      = require('koa-router')
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
app.use(session)
app.use(router(app))

/*
* view
*/
view('./view', {
	map: { html: 'swig' }
})

/*
* route
*/
var route = require('./route')
route(app)

app.listen(config.port)
console.log('server start on port: ', config.port)
