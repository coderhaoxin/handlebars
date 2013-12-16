var mysql  = require('mysql')
var config = require('../config')
var pool   = mysql.createPool(config.mysql)

module.exports = pool
