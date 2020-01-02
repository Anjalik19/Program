const chai = require('chai')
const expect = chai.expect

const dayWeek = require('../src/dayOfWeek')

describe('dayofweek', () => {
	describe('dayofweek', () => {
		it('5 12 2000 should be equals to 0.06812500000023647', () => {
			expect(dayWeek.day(5,12,2000)).to.equal(0.06812500000023647)
		})
	})
})