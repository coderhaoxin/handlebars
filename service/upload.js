var multipart = require('co-multipart')
var fs        = require('co-fs')

exports.file = function* () {
	var parts = yield* multipart(this)

	yield fs.rename(parts.file['upload-file'].path, __dirname + '/../upload/' + parts.file['upload-file'].filename)

	parts.dispose()

	this.body = { message: 'success' }
}
