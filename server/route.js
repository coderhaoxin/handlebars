'use strict';
var user = require('./service/user')

module.exports = function (app) {
	app.get('/api/user/session', user.session)
	app.get('/api/user/:id', user.getUserById)
	app.put('/api/user/:id', user.putUserById)
	app.post('/api/user', user.postUser)
	app.post('/api/user/signin', user.signin)
	app.post('/api/user/signup', user.signup)
}
