var should = require('should');

var util = require('../../util/util');

describe('util', function () {
  it('md5Password', function () {
    var md5Password = util.md5Password('123456');
    md5Password.should.equal('e10adc3949ba59abbe56e057f20f883e');
  })
})
