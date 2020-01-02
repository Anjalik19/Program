const chai = require('chai')
const expect = chai.expect

const calculate = require('../src/monthlyPayment')

describe('Calculator', () => {
	describe('Addition', () => {
		it(' 3000,2,2 should be equals to 127.62079010543516', () => {
			expect(calculate.result(3000, 2,2)).to.equal(127.62079010543516)
		})
	})
})