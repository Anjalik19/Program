/******************************************************************************
* Execution     : 1. default node cmd> node calander.js
*                 2. if nodemon installed cmd> nodemon calander.js
* 
* Purpose       : Takes the month and year as input and prints the Calendar of the month. 
* 
* @description 
* 
* @file         : calander.js
* @overview     : Takes the month and yearas input and prints the Calendar of the month. 
* @module       : calander - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 26-11-2019
*
******************************************************************************/
const readline = require("readline-sync");
let util = require("../utility/dataStructureUtility");
util.calander();