/******************************************************************************
* Execution : 1. default node cmd> node prime.js
*             2. if nodemon installed cmd> nodemon prime.js
* 
* Purpose   : find the Prime numbers
* 
* @description 
* 
* @file     : prime.js
* @overview : Reads the value and print prime numbers.
* @module   : prime- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 19-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let util=require("../utility/algorithmUtility");
util.primeNum();