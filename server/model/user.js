'use strict';
var jSql = require('j-sql')
var connection = require('../util/db').connection

exports.updateUserById = function (id, options, callback) {
	var SQL = 'UPDATE user SET ? WHERE _id = ' + id

	connection.query(SQL, function (error, result) {
		callback(error, result)
	})
}

exports.insertUser = function (user, callback) {
	var SQL = 'INSERT INTO user SET ?'

	connection.query(SQL, function (error, result) {
		callback(error, result)
	})
}

exports.selectUserByKey = function (keyName, keyValue, callback) {
	var SQL = 'SELECT \
	username as username, \
	password as password, \
	point as point \
	WHERE ' + keyName + ' = ' + connection.escape(keyValue) + ' LIMIT 0'

	connection.query(SQL, function (error, users) {
		if (error) {
			return callback(error, null)
		}
		if (!users || users.length === 0) {
			return callback(null, null)
		}
		callback(null, users[0])
	})
}
