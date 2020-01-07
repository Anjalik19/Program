/******************************************************************************
* Execution : 1. default node cmd> node inventoryDataManagement.js
*             2. if nodemon installed cmd> nodemon inventoryDataManagement.js
* 
* Purpose   : Create a JSON file having Inventory Details for Rice, Pulses and Wheats 
* 
* @description 
* 
* @file     : inventoryDataManagement.js
* @overview : Create a JSON file having Inventory Details for Rice, Pulses and Wheats and output the JSON String.
* @module   : inventoryDataManagement- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 28-12-2019
*
******************************************************************************/
const readline = require("readline-sync");
const fs = require("fs");
let content=fs.readFileSync('./inventory.json');
let data = JSON.parse(content);
console.log(data);
let length=data.Rice.length;
let count=0;
console.log("-----------Rice--------------");
try{
for(let i=0;i<length;i++)
{
    let name=data.Rice[i].name;
    let weight=data.Rice[i].weight;
    let price=data.Rice[i].price;
    count+=data.Rice[i].price;
    console.log("price of each rice is:",name +"="+price);
}
console.log("Total price of rice is:",count);
console.log("-----------Pulses--------------");
let lengths=data.Pulses.length;
for(let j=0;j<lengths;j++)
{
    let name=data.Pulses[j].name;
    let weigth=data.Pulses[j].weight;
    let price=data.Pulses[j].price;
    count=count+data.Pulses[j].price;
    console.log("price of each pulses is:",name +":"+price);
}
console.log("Total price of pulses is:",count);
console.log("-----------Wheat-------------");
let leng=data.Wheats.lengm   ;
for(let k=0;k<length;k++)
{
let name=data.Wheats[k].name;
let weight=data.Wheats[k].weight;
let price=data.Wheats[k].price;
count+=count+data.Wheats[k].price;
console.log("price of each weight is:",name +":"+price);
}
console.log("Total price of wheats is:",count);
}
catch(err){
    console.log(err);
}