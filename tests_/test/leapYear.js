const chai = require('chai')
const expect = chai.expect

const leapyear = require('../src/leapYear')

describe('LeapYear', () => {
	describe('leapyear', () => {
		it('2019 shold return leapyear', () => {
			expect(leapyear.leapyear(2019)).to.equal('return not leap year')
		})
	})
})