var parse = require('co-body')

exports.session = function* () {
	this.body = this.session
}

exports.signin = function* () {
	var body = yield parse(this)
	this.session = body
	this.body = {
		message: 'success'
	}
}

exports.signout = function* () {
	this.session = {}
	this.body = {
		message: 'success'
	}
}

exports.gets = function* () {
	this.body = [{
		name: 'hao'
	}, {
		name: 'xin'
	}]
}

exports.get = function* (id) {
	this.body = {
		id: id,
		name: 'hx'
	}
}

exports.put = function* (id) {
	var body = yield parse(this)

	this.body = body
}

exports.post = function* () {
	var body = yield parse(this)

	this.body = body
}

exports.del = function* (id) {
	this.body = {
		id: id,
		message: 'success'
	}
}
