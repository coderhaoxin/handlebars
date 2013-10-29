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
* validate the object contain the properties of keys
* obj: object to validate
* keys: array of keys
* return: true/false
*/
exports.must = function (obj, keys) {
  if (typeof obj !== 'object') {
    return false
  }
  if (!Array.isArray(keys)) {
    return false
  }

  var i = 0
  var len = keys.length
  for (i = 0; i < len; ++i) {
    if (!obj.hasOwnProperty(keys[i])) {
      break
    }
  }

  if ((i + 1) < len) {
    return false
  } else {
    return true
  }
}

/*
* delete the properties not contain in the keys
* obj: object to filte
+ keys: array of keys
*/
exports.only = function (obj, keys) {
  if (typeof obj !== 'object') {
    return
  }
  if (!Array.isArray(keys)) {
    return
  }

  var objKeys = Object.keys(obj)
  for (var i = 0, len = objKeys.length; i < len; ++i) {
    if (keys.indexOf(objKeys[i]) === -1) {
      delete obj[objKeys[i]]
    }
  }
}

/*
* send email
*/
var nodemailer = require('nodemailer')
var smtpTransport = nodemailer.createTransport('SMTP', config.email)

exports.email = smtpTransport.sendMail
