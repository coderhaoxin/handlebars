'use strict';

var jSql = require('j-sql')
var connection = require('../db/connection')

exports.insertUser = function (user, callback) {
	var SQL = 'INSERT INTO user SET ?'

	connection.query(SQL, user, function (error, result) {
		callback(error, result)
	})
}

exports.updateUserById = function (id, options, callback) {
	var SQL = 'UPDATE user SET ? WHERE _id = ' + id

	connection.query(SQL, options, function (error, result) {
		callback(error, result)
	})
}

exports.selectUserByKey = function (keyName, keyValue, callback) {
	var SQL = 'SELECT \
	username as username, \
	password as password, \
	point as point \
	FROM user \
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

/*
* internal api
*/
exports._deleteUserById = function (id, callback) {
	var SQL = 'DELETE FROM user WHERE _id = ' + id

	connection.query(SQL, function (error, result) {
		callback(error, result)
	})
}
