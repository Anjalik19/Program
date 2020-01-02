/******************************************************************************
* Execution : 1. default node cmd> node calculate.js
*             2. if nodemon installed cmd> nodemon calculate.js
* 
* Purpose   : Program to perform addition operation.
* 
* @description 
* 
* @file     : calculate.js
* @overview : Program to perform addition operation.
* @module   : calculate- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 2-1-2020
*
******************************************************************************/
const chai = require('chai')
const expect = chai.expect

const calculate = require('../src/calculate')
	describe('Addition', () => {
		it('1 + 1 should be equals to 2', () => {
			expect(calculate.add(1, 1)).to.equal(2)
		})
	})