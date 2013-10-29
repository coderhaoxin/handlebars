var should = require('should')

var kit = require('../../util/kit')

describe('md5Password()', function () {
	it('', function () {
		var md5Password = kit.md5Password('123456')
		md5Password.should.equal('e10adc3949ba59abbe56e057f20f883e')
	})
})

describe('hashPassword()', function () {
	it('default: sha512', function () {
		var hashPassword = kit.hashPassword('123456', 'salt')
		hashPassword.should.equal('89242e35fc0b2c00ebd536973d984c354395c8afee3caf13fe6b63d3e9e3b78355ac950ffe952fe3c8ec91c3cce2e14b127948c56b478332a4d17fbf76e79672')
	})
	it('sha1', function () {
		var hashPassword = kit.hashPassword('123456', 'salt', 'sha1')
		hashPassword.should.equal('d63e61a3698723a7c783040e8c193d6911c5e3b1')
	})
	it('md5', function () {
		var hashPassword = kit.hashPassword('123456', 'salt', 'md5')
		hashPassword.should.equal('207acd61a3c1bd506d7e9a4535359f8a')
	})
	it('sha256', function () {
		var hashPassword = kit.hashPassword('123456', 'salt', 'sha256')
		hashPassword.should.equal('e4d2f949a401c04e9cd0bd410e31d6f81b413974151fc458c18d2d186c379219')
	})
	it('sha512', function () {
		var hashPassword = kit.hashPassword('123456', 'salt', 'sha512')
		hashPassword.should.equal('89242e35fc0b2c00ebd536973d984c354395c8afee3caf13fe6b63d3e9e3b78355ac950ffe952fe3c8ec91c3cce2e14b127948c56b478332a4d17fbf76e79672')
	})
})

describe('have()', function () {
	var o = {
		name: 'hao',
		age: 123,
		point: 456,
		level: 'member'
	}
	it('', function () {
		var result = kit.have(o, ['name', 'age', 'point', 'level'])
		result.should.equal(true)
	})
	it('', function () {
		var result = kit.have(o, ['level','point', 'age', 'name'])
		result.should.equal(true)
	})
	it('', function () {
		var result = kit.have(o, ['name'])
		result.should.equal(true)
	})
	it('', function () {
		var result = kit.have(o, ['name', 'age'])
		result.should.equal(true)
	})
	it('', function () {
		var result = kit.have(o, ['name', 'age', 'point', 'level', 'pass'])
		result.should.equal(false)
	})
	it('', function () {
		var result = kit.have(o, ['pass', 'level','point', 'age', 'name'])
		result.should.equal(false)
	})
	it('', function () {
		var result = kit.have(o, ['name', 'pass'])
		result.should.equal(false)
	})
	it('', function () {
		var result = kit.have(o, ['name', 'age', 'pass'])
		result.should.equal(false)
	})
})

describe('only()', function () {
	it('', function () {
		var o = {
			name: 'hao',
			age: 123
		}
		kit.only(o, ['name', 'age'])
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
		kit.only(o, ['name'])
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
		kit.only(o, [])
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
		kit.only(o, ['name', 'age', 'pass'])
		var k = Object.keys(o)
		k.length.should.equal(2)
		k.should.include('name')
		k.should.include('age')
	})
})
