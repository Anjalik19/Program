
/******************************************************************************
 *  Execution       :   1. default node         cmd> node primeAnagrame.js 
 *                      2. if nodemon installed cmd> nodemodule primeAnagrame.js
 * 
 *  Purpose         : Extend the Prime Number Program and store only the numbers in
 *                    that range that are Anagrams.
 *  @description    
 * 
 *  @file           : primeAnagrame.js
 *  @overview       :Further store in a 2D Array the numbers that are Anagram and 
 *                   numbers that are not Anagram.

 *  @module         : primeAnagrame - This is optional if expeclictly its an npm or local package
 *  @author         : Anjali<anjali.march19@gmail.com>
 *  @version        : 1.0
 *  @since          : 26-12-2019
 *
 ******************************************************************************/
let readline = require('readline-sync');
let util = require('../Utility/dataStructuresUtility');
try{
let n1=readline.question("enter the n1 value");
let n2=readline.question("enter the n2 value");
primeAnagramme=anagrame(n1,n2);
let result=util.primeAnagrame();
console.log(result);
}
catch(e){
    console.log(e);
}
