
const chai = require('chai')
const expect = chai.expect

const calculator = require('../src/calculator')

describe('Calculator', () => {
	describe('Addition', () => {
		it('1 + 1 should be equals to 2', () => {
			expect(calculator.add(1, 1)).to.equal(2)
		})
	})
})