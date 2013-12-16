var co       = require('co')
var request  = require('co-request')
var should   = require('should')
var hostname = require('../config').host + ':' + require('../config').port

describe('service: user', function () {
	it('signin', function () {
		co(function *() {
			var data = yield request({
				url: hostname + '/api/user/signin',
				method: 'POST',
				jar: true,
				json: {
					username: 'hao',
					password: '123'
				}
			})

			var response = data[0]
			var body = data[0]

			console.log(response)
			console.log(body)
		})
	})
	it('get session', function () {
		co(function *() {
			var data = yield request({
				url: hostname + '/api/user/session',
				method: 'GET',
				jar: true,
				json: true
			})

			var response = data[0]
			var body = data[0]

			console.log(response)
			console.log(body)
		})
	})
	it('signout', function () {
		co(function *() {
			var data = yield request({
				url: hostname + '/api/user/signout',
				method: 'POST',
				jar: true,
				json: {}
			})

			var response = data[0]
			var body = data[0]

			console.log(response)
			console.log(body)
		})
	})
	it('get session', function () {
		co(function *() {
			var data = yield request({
				url: hostname + '/api/user/session',
				method: 'GET',
				jar: true,
				json: true
			})

			var response = data[0]
			var body = data[0]

			console.log(response)
			console.log(body)
		})
	})
})
