'use strict';
var config = require('../config')
var crypto = require('crypto')

exports.md5Password = function (password) {
  return crypto.createHash('md5').update(password).digest('hex')
}

// hashType: 'sha512' (default)
exports.hashPassword = function (password, salt, hashType) {
  if (!hashType) hashType = 'sha512'
  var hash = crypto.createHash(hashType)
  hash.update(password)
  hash.update(salt)

  return hash.digest('hex')
}

/*
* send email
*/
var nodemailer = require('nodemailer')
var smtpTransport = nodemailer.createTransport('SMTP', config.email)

exports.email = smtpTransport.sendMail
