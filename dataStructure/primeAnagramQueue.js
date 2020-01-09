/******************************************************************************
 *  Execution       :   1. default node         cmd> node primeAnagrameQueue.js 
 *                      2. if nodemon installed cmd> nodemodule primeAnagrameQueue.js
 * 
 *  Purpose         : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 
 *                    in a Queue using the Linked List. 
 *  @description    
 * 
 *  @file           : primeAnagrameQueue.js
 *  @overview       : Print the Anagrams from the Queue. Note no Collection Library can be used.
 *  @module         : primeAnagrameQueue- This is optional if expeclictly its an npm or local package
 *  @author         : Anjali<anjali.march19@gmail.com>
 *  @version        : 1.0
 *  @since          : 26-12-2019
 *
 ******************************************************************************/
let readline = require("readline-sync");
let util = require('../utility/dataStructureUtility');
try{
    let n1=readline.question("enter the n1 value");
    let n2=readline.question("enter the n2 value");
    primeAnagrammeQueue=anagrame(n1,n2);
    primeAnagrammeQueue=count(n);
    let result=util.primeAnagrameQueue();
    console.log(result);
    }
    catch(e){
        console.log(e);
    }
