const chai = require('chai')
const expect = chai.expect

const distance = require('../src/euclideanDistance')

describe('EuclideanDiatance', () => {
	describe('distance', () => {
		it('3 , 4 should be equals to 5', () => {
			expect(distance.dist(3,4)).to.equal(5)
		})
	})
})