'use strict';

var should = require('should')
var User   = require('../model/user')
var kit    = require('../util/kit')

var user = {
	username: 'haoxin',
	password: '123456',
	point: 123
}
var userId = 0

describe('# test user', function () {
	it('should insert user', function (done) {
		user.password = kit.md5Password(user.password)
		User.insertUser(user, function (error, result) {
			should.not.exist(error)
			result.insertId.should.above(0)
			userId = result.insertId
			done()
		})
	})

	it('should update user', function (done) {
		user.username = 'coderhaoxin'
		User.updateUserById(userId, user, function (error, result) {
			should.not.exist(error)
			done()
		})
	})

	it('should select user', function (done) {
		User.selectUserByKey('username', 'coderhaoxin', function (error, result) {
			should.not.exist(error)
			done()
		})
	})

	it('should not select user', function (done) {
		User.selectUserByKey('username', 'haoxin', function (error, result) {
			should.not.exist(error)
			should.not.exist(result)
			done()
		})
	})

	it('should delete user', function (done) {
		User._deleteUserById(userId, function (error, result) {
			should.not.exist(error)
			done()
		})
	})
})
