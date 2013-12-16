var mysql  = require('mysql')
var config = require('../config')

var connection = mysql.createConnection(config.mysql)
connection.connect()
keepConnection()

/*
* handle mysql connection error
*/
connection.on('error', function (error) {
	console.log('mysql connection error')
	console.log(error)
	setTimeout(function () {
		connection.connect()
	}, 3000)
})

/*
* keep mysql connection
*/
function keepConnection() {
	setInterval(function () {
		connection.query('select 1', function (error) {
			if (error) {
				console.log('keep connection error')
				console.log(error)
				setTimeout(function () {
					connection.connect()
				}, 3000)
			}
		})
	}, 10 * 60 * 1000)//10 min
}

module.exports = connection
