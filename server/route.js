'use strict';
var test = require('./service/test')
var user = require('./service/user')

module.exports = function (app) {
	// test
	app.get('/api/test/session', test.session)
	app.post('/api/test/signin', test.signin)
	app.post('/api/test/logout', test.logout)

	// user
	app.get('/api/user/session', user.session)
	app.get('/api/user/:id', user.getUserById)
	app.put('/api/user/:id', user.putUserById)
	app.post('/api/user', user.postUser)
	app.post('/api/user/signin', user.signin)
	app.post('/api/user/signup', user.signup)
}
