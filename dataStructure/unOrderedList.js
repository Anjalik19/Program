/******************************************************************************
* Execution     : 1. default node cmd> node unOrdered.js
*                 2. if nodemon installed cmd> nodemon unOrdered.js
* 
* Purpose       : Read the Text from a file, split it into words and arrange it as Linked List. 
* 
* @description 
* 
* @file         : unOrdered.js
* @overview     : Take a user input to search a Word in the List. 
                  If the Word is not found then add it to the list
                  If it found then remove the word from the List.
* @module       : unOrdered List - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 23-11-2019
*
******************************************************************************/
const fs = require("fs");
let linkedList=require("../utility/dataStructureUtility");
let readline = require("readline-sync");
let data = fs.readFileSync("../../Anjali.txt");
console.log("String read from file: \n" + data);
let stringArray = data.toString().toLocaleLowerCase().split(' '); 
let searchElement = readline.question("Enter a word to search : ");
linkedList.unOrderedList(stringArray,searchElement); 