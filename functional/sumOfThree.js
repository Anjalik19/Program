/******************************************************************************
* Execution     : 1. default node cmd> node sumOfThree.js
*                   2. if nodemon installed cmd> nodemon sumOfThree.js
* 
* Purpose       : Read in N integers and counts the number of triples that sum to exactly 0.

* @description 
* 
* @file         : sumOfThree.js
* @overview     : Read in N integers and counts the number of triples that sum to exactly 0.
* @module       : sumOfThree- This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 13-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let n=readline.question('Enter Number Integer');
try{
    if(n<3)
        throw error;
    else
    {
        var arr=[];
        console.log("Enter" +(rows*cols) +"values into array");
        for(let i=0;i<n;i++)
            arr.push(require.question());
        console.log(sumOfThreeNum(n,arr));
    }
}
catch(error){
    console.log("enter atleast 3 numbers");
}

