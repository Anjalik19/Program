const chai = require('chai')
const expect = chai.expect

const windchill = require('../src/windchill')

describe('Calculator', () => {
	describe('Addition', () => {
		it('speed should be equals to 2', () => {
			expect(windchill.windspeed(20, 35)).to.equal(0.12814245288440418)
		})
	})
})