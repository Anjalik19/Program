const chai = require('chai')
const expect = chai.expect

const power = require('../src/power')

describe('Calculator', () => {
	describe('Addition', () => {
		it('1 + 1 should be equals to 2', () => {
			expect(power.power(3)).to.equal(8)
		})
	})
})