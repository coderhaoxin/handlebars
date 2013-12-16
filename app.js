var config = require('./config')

/*
* dir initialize
*/
var fs = require('fs')
if (!fs.existsSync('./upload')) {
	fs.mkdirSync('upload')
}

var etag        = require('koa-etag')
var session     = require('koa-session')
var staticCache = require('koa-static-cache')
var parse       = require('co-body')
var view        = require('co-views')
var koa         = require('koa')
var router      = require('koa-router')
var app         = koa()

app.use(etag())
app.use(staticCache('../static', { maxAge: 10 }))
app.use(session)
app.use(router(app))

view('./view', {
	map: { html: 'swig' }
})

// route
app.get('/users/:id', function *(id) {
	this.body = 'hello'
})

app.listen(config.port)
console.log('server start on port: ', config.port)
