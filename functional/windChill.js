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
 *  @since          : 17-11-2019
 *
 ******************************************************************************/
let readline=require("readline-sync");
let util=require('../utility/functionalUtility');
try{
let temperature=readline.question("enter the value of temperature:");
let windSpeed=readline.question("enter the value of windSpeed:");
let result=util.windChill(temperature,windSpeed);
console.log("Wind Chill is:",result);
}
    catch(err)
    {
        console.log(err);
    }