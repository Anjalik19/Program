
const chai = require('chai')
const expect = chai.expect

const factorial = require('../src/factorial')

describe('Factorial', () => {
	describe('Factor', () => {
		it('1 + 1 should be equals to 2', () => {
			expect(factorial.fact(5)).to.equal(120)
		})
	})
})