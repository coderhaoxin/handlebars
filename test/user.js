var request = require('request')
var should  = require('should')
var hostname = require('../config').host + ':' + require('../config').port

describe('service: test', function () {
	it('signin', function (done) {
		request({
			url: hostname + '/api/test/signin',
			method: 'POST',
			jar: true,
			json: {}
		}, function (error, res, data) {
			res.statusCode.should.equal(200)
			done()
		})
	})
	it('get session', function (done) {
		request({
			url: hostname + '/api/test/session',
			method: 'GET',
			jar: true,
			json: true
		}, function (error, res, data) {
			res.statusCode.should.equal(200)
			data.username.should.equal('test')
			data.password.should.equal('1234')
			done()
		})
	})
	it('logout', function (done) {
		request({
			url: hostname + '/api/test/logout',
			method: 'POST',
			jar: true,
			json: {}
		}, function (error, res, data) {
			res.statusCode.should.equal(200)
			done()
		})
	})
	it('get session', function (done) {
		request({
			url: hostname + '/api/test/session',
			method: 'GET',
			jar: true,
			json: true
		}, function (error, res, data) {
			res.statusCode.should.equal(401)
			should.not.exist(data.username)
			should.not.exist(data.password)
			done()
		})
	})
})
