/******************************************************************************
* Execution     : 1. default node cmd> node balancedParentheses.js
*                 2. if nodemon installed cmd> node balancedParentheses.js
* 
* Purpose       : Program to Show Arithmetic Expression is balanced or not.
* 
* @description 
* 
* @file         : balancedParentheses.js
* @overview     : Program to Show Arithmetic Expression is balanced or not.
* @module       : balancedParentheses - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 24-11-2019
*
******************************************************************************/
const readline = require("readline-sync");
let util = require("../utility/dataStructureUtility");
let string="(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)";
let result=util.balancedParentheses(string)?"Balanced" : "Not Balanced"
console.log(result);

