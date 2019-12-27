/******************************************************************************
* Execution     : 1. default node cmd> node ordered.js
*                 2. if nodemon installed cmd> nodemon ordered.js
* 
* Purpose       : Read file and perform insert and delete operation.
* 
* @description 
* 
* @file         : ordered.js
* @overview     : Program to read a List of Numbers from a file and arrange it in ascending Order
                  and perform insert and delete operation.
* @module       : ordered - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 24-11-2019
*
******************************************************************************/
const fs = require("fs");
let linkedList=require("../utility/dataStructureUtility");
let readline = require("readline-sync");
let data = fs.readFileSync("../../program.txt");
console.log("element read from file: \n" + data);
let arr = data; 
console.log("after sorting list is:\n"+arr.sort());
let searchElement = readline.question("Enter a element to search : ");
linkedList.orderedList(arr,searchElement);
