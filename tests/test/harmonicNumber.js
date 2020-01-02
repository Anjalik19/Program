const chai = require('chai')
const expect = chai.expect

const harmonic = require('../src/harmonicNumber')

describe('harmonic', () => {
	describe('harmonic', () => {
		it('harmonic value of 50 should be equals to 4.499205338329423', () => {
			expect(harmonic.harmonic(50)).to.equal(4.499205338329423)
		})
	})
})