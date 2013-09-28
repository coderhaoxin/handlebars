/*
* mongoose
*/
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {type: String},
  password: {type: String}
});

// var User = mongoose.model('user', UserSchema);
mongoose.model('user', UserSchema);


/*
* sequelize
*/
var Sequelize = require('sequelize');
var sequelize = require('../util/sequelize');
var User = sequelize.define('User', {
  username: Sequelize.STRING(45),
  password: Sequelize.STRING(1000)
})

exports
