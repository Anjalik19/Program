const chai = require('chai')
const expect = chai.expect

const quadratic = require('../src/quadraticEquation')

describe('dayofweek', () => {
	describe('dayofweek', () => {
		it('5,50,2 should be equals to -4.2957387766563535,-5.7042612233436465', () => {
			expect(quadratic.equation(5,50,2)).to.equal([-4.2957387766563535],[-5.7042612233436465])
		})
	})
})