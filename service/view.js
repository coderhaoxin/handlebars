var view = require('co-views')

/*
* view
*/
var render = view('view', {
	map: { html: 'swig' }
})

exports.index = function* () {
	var data = {
		title: 'node-app-lab',
		items: []
	}
	for (var i = 0; i < 100; i++) {
		data.items.push({
			id: i,
			name: 'seed-0' + i,
			quantity: i * 100,
			price: i * 123,
			createTime: Date.now()
		})
	}
	this.body = yield render('index', data)
}
