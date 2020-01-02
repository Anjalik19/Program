/******************************************************************************
* Execution : 1. default node cmd> node dayOfWeek.js
*             2. if nodemon installed cmd> nodemon dayOfweek.js
* 
* Purpose   :Takes a date as input and prints the day of the week that date falls on.
* 
* @description 
* 
* @file     : dayOfWeek.js
* @overview : Takes a date as input and prints the day of the week that date falls on.
* @module   : dayOfWeek- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 2-1-2020
*
******************************************************************************/
const chai = require('chai')
const expect = chai.expect

const dayWeek = require('../src/dayOfWeek')
	describe('dayofweek', () => {
		it('5 12 2000 should be equals to 0.06812500000023647', () => {
			expect(dayWeek.day(5,12,2000)).to.equal(0.06812500000023647)
		})
	})