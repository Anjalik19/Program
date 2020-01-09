
/*****************************************************************************
 *  Execution       :  1. default node         cmd> node primeAnagrameStack.js 
 *                     2. if nodemon installed cmd> nodemodule primeAnagrameStack.js
 * 
 *  Purpose         : Add the Prime Numbers that are Anagram in the Range of 0 - 1000
 *                    in a Stack using the Linked List.
 *  @description    
 * 
 *  @file           : primeAnagrameStack.js
 *  @overview       : Print the Anagrams in the Reverse Order. Note no Collection Library can be used.
 *  @module         : primeAnagrame Stack- This is optional if expeclictly its an npm or local package
 *  @author         : Anjali<anjali.march19@gmail.com>
 *  @version        : 1.0
 *  @since          : 24-12-2019
 *
 ******************************************************************************/
let readline = require("readline-sync");
let util = require('../utility/dataStructureUtility');
try{
    let n1=readline.question("enter the n1 value");
    let n2=readline.question("enter the n2 value");
    primeAnagrammeStack=anagrame(n1,n2);
    primeAnagrammeStack=count(n);
    let result=util.primeAnagrameStack();
    console.log(result);
    }
    catch(e){
        console.log(e);
    }


