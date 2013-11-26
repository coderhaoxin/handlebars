var should = require('should')

var clean = require('../../util/clean')

describe('only()', function () {
	it('', function () {
		var o = {
			name: 'hao',
			age: 123
		}
		clean.only(o, ['name', 'age'], ['string', 'number'])
		var k = Object.keys(o)
		k.length.should.equal(2)
		k.should.include('name')
		k.should.include('age')
	})
	it('', function () {
		var o = {
			name: 'hao',
			age: 123
		}
		clean.only(o, ['name'], ['string', 'number'])
		var k = Object.keys(o)
		k.length.should.equal(1)
		k.should.include('name')
		k.should.not.include('age')
	})
	it('', function () {
		var o = {
			name: 'hao',
			age: 123
		}
		clean.only(o, [], [])
		var k = Object.keys(o)
		k.length.should.equal(0)
		k.should.not.include('name')
		k.should.not.include('age')
	})
	it('', function () {
		var o = {
			name: 'hao',
			age: 123
		}
		clean.only(o, ['name', 'age', 'pass'], ['string', 'number', 'string'])
		var k = Object.keys(o)
		k.length.should.equal(2)
		k.should.include('name')
		k.should.include('age')
	})
})
