/******************************************************************************
* Execution     : 1. default node cmd> node leapYear.js
*                 2. if nodemon installed cmd> nodemon leapYear.js
* 
* Purpose       : Program to print year is a leap year or not.
* 
* @description 
* 
* @file         : leapYear.js
* @overview     : Program to print year is a leap year or not by taking value from user.
* @module       : leapYear- This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 14-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let util=require("../utility/functionalUtility");
try{
let year=readline.question("enter year:");
let result=util.leapYear(year);
console.log("year is:",result);
}
catch(err)
{
    console.log(err);
}
