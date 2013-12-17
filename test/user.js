var request  = require('request')
var should   = require('should')
var hostname = 'http://localhost:' + require('../config').port

describe('service: user', function () {
	it('signin', function (done) {
		request({
			url: hostname + '/api/user/signin',
			method: 'POST',
			jar: true,
			json: {
				username: 'hao',
				password: '123'
			}
		}, function (error, response, body) {
			response.statusCode.should.equal(200)
			body.message.should.equal('success')
			done()
		})
	})
	// it('get session', function (done) {
	// 	request({
	// 		url: hostname + '/api/user/session',
	// 		method: 'GET',
	// 		jar: true,
	// 		json: true
	// 	}, function (error, response, body) {
	// 		console.log(response.statusCode)
	// 		console.log(body)
	// 		done()
	// 	})
	// })
	it('signout', function (done) {
		request({
			url: hostname + '/api/user/signout',
			method: 'GET',
			jar: true,
			json: true
		}, function (error, response, body) {
			response.statusCode.should.equal(200)
			body.message.should.equal('success')
			done()
		})
	})
	// it('get session', function (done) {
	// 	request({
	// 		url: hostname + '/api/user/session',
	// 		method: 'GET',
	// 		jar: true,
	// 		json: true
	// 	})
	// }, function (error, response, body) {
	// 	console.log(response.statusCode)
	// 	console.log(body)
	// 	done()
	// })
})

describe('service: user', function () {
	it('post', function (done) {
		request({
			url: hostname + '/api/user?a=12',
			method: 'POST',
			jar: true,
			json: {
				name: 'hello, koa'
			}
		}, function (error, response, body) {
			response.statusCode.should.equal(200)
			body.name.should.equal('hello, koa')
			done()
		})
	})
	it('put', function (done) {
		request({
			url: hostname + '/api/user/1',
			method: 'PUT',
			jar: true,
			json: {
				name: 'haha, go'
			}
		}, function (error, response, body) {
			response.statusCode.should.equal(200)
			body.name.should.equal('haha, go')
			done()
		})
	})
})
