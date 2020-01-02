/******************************************************************************
* Execution    : 1. default node cmd> node monthlyPayment.js
*                2. if nodemon installed cmd> nodemon monthlyPayment.js
* 
* Purpose      : calculating monthlyPayment
* 
* @description 
* 
* @file        : monthlyPayment.js
* @overview    : calculating monthlyPayment by taking value from user.
* @module      : monthlyPayment- This is optional if expeclictly its an npm or local package
* @author      : Anjali<anjali.march19@gmail.com>
* @version     : 1.0
* @since       : 2-1-2020
*
******************************************************************************/
const chai = require('chai')
const expect = chai.expect

const calculate = require('../src/monthlyPayment')
	describe('Payment', () => {
		it(' 3000,2,2 should be equals to 127.62079010543516', () => {
			expect(calculate.result(3000, 2,2)).to.equal(127.62079010543516)
		})
	})