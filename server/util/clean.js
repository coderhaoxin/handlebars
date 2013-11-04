exports.only = function (obj, keys, types) {
  if (typeof obj !== 'object') {
    return
  }
  if (!Array.isArray(keys)) {
    return
  }
  if (!Array.isArray(types)) {
    return
  }
  if (keys.length > types.length) {
    return
  }

  var objKeys = Object.keys(obj)
  for (var i = 0, len = objKeys.length; i < len; ++i) {
    if (keys.indexOf(objKeys[i]) === -1) {
      delete obj[objKeys[i]]
    } else if (typeof obj[objKeys[i]] !== types[i]) {
      delete obj[objKeys[i]]
    }
  }
}
