/******************************************************************************
* Execution     : 1. default node cmd> node binarySearch.js
*                 2. if nodemon installed cmd> nodemon binarySearch.js
* 
* Purpose       : Find the word in word list by using Binary Search.
* 
* @description 
* 
* @file         : binarySearch.js
* @overview     : Binary Search program to find Word from Word List
* @module       : binarySearch - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 16-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let util=require("../utility/algorithmUtility");
let stringArr=["hello","how","are","you"];
console.log(stringArr)
let searchword=readline.question("enter the string:");
let result=util.binary(stringArr,searchword);
console.log("element found at:",stringArr,searchword);
