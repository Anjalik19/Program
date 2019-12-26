/******************************************************************************
* Execution     : 1. default node cmd> node palindrome.js
*                 2. if nodemon installed cmd> nodemon palindrome.js
* 
* Purpose       : Program to check a string is palindrome or not.
* 
* @description 
* 
* @file         : palindrome.js
* @overview     : Program to check a string is palindrome or not.
* @module       : palindrome - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 26-11-2019
*
******************************************************************************/
const readsync = require('readline-sync');
let util = require("../utility/dataStructureUtility");
let str = readsync.question("Enter the string:");
let result = util.palindrome(str);
console.log(result);