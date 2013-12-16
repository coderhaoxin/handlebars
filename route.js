var user = require('./service/user')

module.exports = function (app) {
	/*
	* user
	*/
	app.get('/api/user/session', user.session)
	app.get('/api/user/signout', user.signout)
	app.get('/api/user/:id', user.get)
	app.get('/api/users', user.gets)

	app.put('/api/user/:id', user.put)
	app.post('/api/user', user.post)
	app.post('/api/user/signin', user.signin)

}
