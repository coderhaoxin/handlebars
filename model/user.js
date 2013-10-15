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
