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
* @since       : 16-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let util=require("../utility/functionalUtility");
try{
let principal=readline.question("enter the value of principal:");
let year=readline.question("enter the value of year:");
let Rate=readline.question("enter the value of Rate:");
let Payment=util.payments(principal,year,Rate);
console.log("Monthly payment is:",Payment);
}
catch(err)
{
    console.log(err);
}