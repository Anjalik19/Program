/******************************************************************************
 *  Execution     : 1. default node         cmd> node stringReplace.js 
 *                  2. if nodemon installed cmd> nodemon stringReplace.js
 * 
 *  Purpose       : Replace a given string with new string
 * 
 *  @description    
 * 
 *  @file         : stringReplace.js
 *  @overview     : Replacing old string with new string
 *  @module       : stringReplace - This is optional if expeclictly its an npm or local package
 *  @author       : Anjali<anjali.march19@gmail.com>
 *  @version      : 1.0
 *  @since        : 16-11-2019
 *
 ******************************************************************************/
let readline=require("readline-sync");
let util=require("../utility/functionalUtility");
try{
console.log('hello username..how r u?');
let name=readline.question("enter the name:");
let replace=readline.question('enter the string you want to replace:')
let output=util.strngs(replace,name);
console.log("after replacement:",output);
}
catch(err)
{
    console.log(err);
}