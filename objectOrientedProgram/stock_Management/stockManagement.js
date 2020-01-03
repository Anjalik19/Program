/******************************************************************************
* Execution : 1. default node cmd> node stockManagement.js
*             2. if nodemon installed cmd> nodemon stockManagement.js
* 
* Purpose   : program to read in Stock Names, Number of Share, Share Price. 
* 
* @description 
* 
* @file     : stockManagement.js
* @overview : program to read in Stock Names, Number of Share, Share Price. 
              and print a Stock Report with total value of each Stock and the total value of Stock.
* @module   : stockManagement- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 28-11-2019
*
******************************************************************************/
const readline=require("readline-sync");
const fs=require('fs');
let content=fs.readFileSync("./stock.json");
let data=JSON.parse(content);
console.log(data);
let length=data.stock_report.length;
let count=0;
try{
for(let i=0;i<length;i++)
{
    let name=data.stock_report[i].stock_name;
    let share=data.stock_report[i].number_of_share;
    let price=data.stock_report[i].share_price;
    count=count+data.stock_report[i].share_price;
    console.log("price of each stock:","Name",name,":","Share",share,":", "price",price);

    console.log("total value of each stock:",share*price);
}
console.log("Total price of share:",count);
}
catch(error)
{
    console.log(error);
}