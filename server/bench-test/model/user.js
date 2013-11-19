'use strict';

var User      = require('../../model/user')

var times     = 10000
var startTime = Date.now()

for (var i = 0, j = 0; i < times; i++) {
	User.selectUserByKey('username', 'coderhaoxin', function (error, result) {
		if (error) {
			console.log(error)
		}
		j++
		if ((j+1) === times) {
			console.log('times:', times)
			console.log('continue time: ', (Date.now() - startTime) / 1000, 's')
		}
	})
}
