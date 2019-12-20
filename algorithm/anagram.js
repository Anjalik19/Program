/******************************************************************************
* Execution : 1. default node cmd> node anagram.js
*             2. if nodemon installed cmd> nodemon anagram.js
* 
* Purpose   : One string is an anagram of another.
* 
* @description 
* 
* @file     : anagram.js
* @overview : Take 2 Strings as Input and find One string is an anagram of another.
* @module   : anagram- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 17-11-2019
*
******************************************************************************/
let readline = require("readline-sync");
let util=require("../utility/algorithmUtility");
let strOne = readline.question("enter first string:");
let strTwo = readline.question("enter second string:");
let output=util.isAnagram(strOne,strTwo);
if(output==true)
{
    try{

    console.log("it is an Anagram");
    }
    catch(err)
    {
        console.log(err);
    }
}
else
{
    console.log("Letters are not an anagrm");   
}
