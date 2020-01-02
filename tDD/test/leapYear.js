const chai = require('chai')
const expect = chai.expect

const leapyear = require('../src/leapyear')

describe('leapyear', () => {
	describe('findLeapyear', () => {
		it('year should return leap year or not',() => {
			expect(leapYear(2019)).to.equal(leapyear)
		})
	})
})