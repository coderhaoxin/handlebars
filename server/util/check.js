exports.have = function (obj, keys, types) {
	if (typeof obj !== 'object') {
		return false
	}
	if (!Array.isArray(keys)) {
		return false
	}
	if (!Array.isArray(types)) {
    return false
  }
  if (keys.length > types.length) {
    return false
  }

	var i = 0
	var len = keys.length
	for (i = 0; i < len; ++i) {
		if (!obj.hasOwnProperty(keys[i])) {
			break
		} else if (typeof obj[keys[i]] !== types[i]) {
			break
		}
	}

	if (i < len) {
		return false
	} else {
		return true
	}
}
