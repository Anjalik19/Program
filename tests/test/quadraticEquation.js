/******************************************************************************
* Execution     : 1. default node cmd> node quadraticEquation.js
*                 2. if nodemon installed cmd> nodemon quadraticEquation.js
* 
* Purpose       : Program to find the roots of the equation a*x*x + b*x + c. 
* 
* @description 
* 
* @file         : quadraticEquation.js
* @overview     : Program to find the roots of the equation a*x*x + b*x + c.
* @module       : quadraticEquation- This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 2-1-2020
*
******************************************************************************/
const chai = require('chai')
const expect = chai.expect

const quadratic = require('../src/quadraticEquation')

	describe('quadarticEqu', () => {
		it('5,50,2 should be equals to -4.2957387766563535,-5.7042612233436465', () => {
			expect(quadratic.equation(5,50,2)).to.equal([-4.2957387766563535],[-5.7042612233436465])
		})
	})