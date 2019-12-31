/******************************************************************************
* Execution : 1. default node cmd> node prototypeDesignPattern.js
*             2. if nodemon installed cmd> nodemon prototypeDesignPattern.js
* 
* Purpose   : program to create prototype design pattern
* @description 
* 
* @file     : prototypeDesignPattern.js
* @overview : program to create prototype design pattern
* @module   : prototypeDesignPattern- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 31-11-2019
*
******************************************************************************/
const readline=require("readline-sync");
let util=require("../utility/designPatternUtility");
try{
    util.prototypeDesign();
}
catch(err)
{
    console.log(err);
}