'use strict';

exports.signin = function (req, res, next) {
	// req.session = {}
	req.session.username = 'test'
	req.session.password = '1234'
	res.status(200).json({ message: 'success' })
}

exports.logout = function (req, res, next) {
	delete req.session.username
	delete req.session.password
	res.status(200).json({ message: 'success' })
}

exports.session = function (req, res, next) {
	if (!req.session.username || !req.session.password) {
		return res.status(401).json({ message: 'not login' })
	}
	res.status(200).json(req.session)
}
