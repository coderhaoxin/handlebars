var r      = require('koa-route')

var user   = require('./service/user')
var upload = require('./service/upload')

module.exports = function (app) {
	/*
	* user
	*/
	app.use(r.get('/api/user/session', user.session))
	app.use(r.get('/api/user/signout', user.signout))
	app.use(r.get('/api/user/:id', user.get))
	app.use(r.get('/api/users', user.gets))

	app.use(r.put('/api/user/:id', user.put))
	app.use(r.post('/api/user', user.post))
	app.use(r.post('/api/user/signin', user.signin))

	/*
	* upload
	*/
	app.use(r.post('/api/upload/file', upload.file))
}
