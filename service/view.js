var view = require('co-views')

/*
* view
*/
var render = view('../view', {
	map: { html: 'swig' }
})

exports.index = function* () {
	this.body = yield render('index', { index: {
		title: 'node-app-lab'
	} })
}
