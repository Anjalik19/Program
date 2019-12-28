/******************************************************************************
* Execution : 1. default node cmd> node addressBook.js
*             2. if nodemon installed cmd> nodemon addressBook.js
* 
* Purpose   : 
* 
* @description 
* 
* @file     : addressBook.js
* @overview : 
* @module   : addressBook- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 28-11-2019
*
******************************************************************************/
const readline=require("readline-sync");
const fs=require('fs');
let content=fs.readFileSync("./addressBook.json");
let data=JSON.parse(content);
console.log(data);
console.log("1.Adding new data");
console.log("2.Modify the data");
console.log("3.Delete the data");
console.log("4.Exit");
let option=readline.questionInt("enter your choice:")
choices=(option)=>
{
    if(option=="1")
    {
        add();
    }
    else if(option==2)
    {
        modify();
    }
    else if(option==3)
    {
        remove();
    }
    else(option==4)
    {
        exit();
    }
}