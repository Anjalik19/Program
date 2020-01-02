/******************************************************************************
* Execution     : 1. default node cmd> node euclideanDistance.js
*                 2. if nodemon installed cmd> nodemon euclideanDistance.js
* 
* Purpose       : To print the Euclidean distance 
* 
* @description 
* 
* @file         : euclideanDistance.js
* @overview     : To print the Euclidean distance from the point (x, y) to the origin (0, 0)
* @module       : euclideanDistance - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 2-1-2020
*
******************************************************************************/
const chai = require('chai')
const expect = chai.expect

const distance = require('../src/euclideanDistance')
	describe('distance', () => {
		it('3 , 4 should be equals to 5', () => {
			expect(distance.dist(3,4)).to.equal(5)
		})
	})