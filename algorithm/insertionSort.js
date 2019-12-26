/******************************************************************************
* Execution : 1. default node cmd> node insertionSort.js
*             2. if nodemon installed cmd> nodemon insertionSort.js
* 
* Purpose   : Sort the given string using insertion sort.
* @description 
* 
* @file     : insertionSort.js
* @overview : Reads in strings and prints them in sorted order using insertion sort.
* @module   : InsertionSort- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 18-11-2019
*
******************************************************************************/
let arr = ["hello", "every", "one"];
console.log("unsorted array is:", arr);
let util = require("../utility/algorithmUtility");
console.log("sorterd array:", util.inSort(arr));



