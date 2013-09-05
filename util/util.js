var crypto = require('crypto');

exports.md5Password = function (password) {
  return crypto.createHash('md5').update(password).digest('hex');
}
