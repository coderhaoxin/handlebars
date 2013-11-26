var should = require('should')

var check = require('../../util/check')

describe('have()', function () {
	var o = {
		name: 'hao',
		age: 123,
		point: 456,
		level: 'member'
	}
	it('', function () {
		var result = check.have(o, ['name', 'age', 'point', 'level'], ['string', 'number', 'number', 'string'])
		result.should.equal(true)
	})
	it('', function () {
		var result = check.have(o, ['level','point', 'age', 'name'], ['string', 'number', 'number', 'string'])
		result.should.equal(true)
	})
	it('', function () {
		var result = check.have(o, ['name'], ['string'])
		result.should.equal(true)
	})
	it('', function () {
		var result = check.have(o, ['name', 'age'], ['string', 'number'])
		result.should.equal(true)
	})
	it('', function () {
		var result = check.have(o, ['name', 'age', 'point', 'level', 'pass'], ['string', 'number', 'number', 'string', 'string'])
		result.should.equal(false)
	})
	it('', function () {
		var result = check.have(o, ['pass', 'level','point', 'age', 'name'], ['string', 'string', 'number', 'number', 'string'])
		result.should.equal(false)
	})
	it('', function () {
		var result = check.have(o, ['name', 'pass'], ['string', 'string'])
		result.should.equal(false)
	})
	it('', function () {
		var result = check.have(o, ['name', 'age', 'pass'], ['string', 'number', 'string'])
		result.should.equal(false)
	})
})
