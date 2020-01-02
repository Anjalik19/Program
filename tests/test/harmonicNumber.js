/******************************************************************************
* Execution     : 1. default node cmd> node harmonicNumber.js
*                 2. if nodemon installed cmd> nodemon harmonicNumber.js
* 
* Purpose       : Print the Nth Harmonic Value.
* 
* @description 
* 
* @file         : harmonicNumber.js
* @overview     : Print the Nth Harmonic Value.
* @module       : harmonicNumber - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 2-1-2020
*
******************************************************************************/
const chai = require('chai')
const expect = chai.expect

const harmonic = require('../src/harmonicNumber')
	describe('harmonic', () => {
		it('harmonic value of 50 should be equals to 4.499205338329423', () => {
			expect(harmonic.harmonic(50)).to.equal(4.499205338329423)
		})
	})