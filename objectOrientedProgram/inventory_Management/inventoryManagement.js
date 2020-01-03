/******************************************************************************
* Execution : 1. default node cmd> node inventoryManagement.js
*             2. if nodemon installed cmd> nodemon inventoryManagement.js
* 
* Purpose   : Program to create Inventory Object from JSON. Calculate the value for every Inventory.
* @description 
* 
* @file     : inventoryManagement.js
* @overview : Program to create Inventory Object from JSON. Calculate the value for every Inventory.
* @module   : inventoryManagement- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 31-12-2019
*
******************************************************************************/
let Rice = require('./inventorymanage.js');
const readline = require("readline-sync");
const fs = require("fs");
let content=fs.readFileSync('./inventoryManagement.json');
let data = JSON.parse(content);
console.log(data);
let length=data.Rice.length;
let arr=[];
console.log("-----------Rice--------------");
for(let i=0;i<length;i++)
{
    let name=data.Rice[i].name;
    let weight=data.Rice[i].weight;
    let price=data.Rice[i].price;
    let company = new Rice(name, weight, price);
    let total = company.sum();
    console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
    console.log("Total price of rice is =" + total)

    let info1={
        "name":name,
        "weight":weight,
        "price":price
    }
arr.push(info1);
}
console.log("arr",arr);
let data1=JSON.stringify(arr);
    fs.writeFileSync('newData.json', data1, function (err) {
        if (err) {
            console.log(err);
        }
    });
