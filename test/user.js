var should  = require('should')
var request = require('supertest')
require     = request('http://localhost:' + require('../config').port)


describe('service: user', function () {
	it('signin', function (done) {
		request
		.post('/api/user/signin')
		.send({
			username: 'hao',
			password: '123'
		})
		.expect(200)
		.end(function (error, res) {
			console.log(res.body)
			done()
		})
	})
	it('get session', function (done) {
		request
		.get('/api/user/session')
		.expect(200)
		.end(function (error, res) {
			console.log(res.body)
			done()
		})
	})
	it('signout', function (done) {
		request
		.get('/api/user/signout')
		.expect(200)
		.end(function (error, res) {
			console.log(res.body)
			done()
		})
	})
	// it('get session', function (done) {
	// 	request
	// 	.get('/api/user/session')
	// 	.expect(200)
	// 	.end(function (error, res) {
	// 		console.log(res.body)
	// 		done()
	// 	})
	// })
})

describe('service: user', function () {
	it('post', function (done) {
		request
		.post('/api/user?a=12')
		.send({
			name: 'hello, koa'
		})
		.expect(200)
		.end(function (error, res) {
			console.log(res.body)
			done()
		})
	})
	it('put', function (done) {
		request
		.post('/api/user/1')
		.send({
			name: 'haha, go'
		})
		.expect(200)
		.end(function (error, res) {
			console.log(res.body)
			done()
		})
	})
})
