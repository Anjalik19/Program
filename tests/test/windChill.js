/******************************************************************************
 *  Execution       :   1. default node         cmd> node windChill.js
 *                      2. if nodemon installed cmd> nodemon windChill.js
 * 
 *  Purpose         : calculate wind chill
 * 
 *  @description    
 * 
 *  @file           : windChill.js
 *  @overview       : calculating wind chill by taking values from user.
 *  @module         : windChill - This is optional if expeclictly its an npm or local package
 *  @author         : BridgeLabz <bridgeit@bridgeit>
 *  @version        : 1.0
 *  @since          : 2-1-2020
 *
 ******************************************************************************/
const chai = require('chai')
const expect = chai.expect

const windchill = require('../src/windchill')
	describe('windchill', () => {
		it('speed should be equals to 0.12814245288440418', () => {
			expect(windchill.windspeed(20, 35)).to.equal(0.12814245288440418)
		})
	})
