var parse = require('co-body')

exports.session = function *() {
	this.body = this.session
}

exports.signin = function *() {
	var body = parse(this)
	this.session = body
	this.body = {
		message: 'success'
	}
}

exports.signout = function *() {
	this.session = {}
	this.body = {
		message: 'success'
	}
}

exports.gets = function *() {
	var query = parse(this)
	console.log(query)

	this.body = [{
		name: 'hao'
	}, {
		name: 'xin'
	}]
}

exports.get = function *(id) {
	this.body = {
		id: id,
		name: 'hx'
	}
}

exports.put = function *(id) {

}

exports.post = function *() {
	var body = parse(this)
	console.log(body)

	this.body = body
}

exports.del = function *(id) {
	this.body = {
		id: id,
		message: 'success'
	}
}
