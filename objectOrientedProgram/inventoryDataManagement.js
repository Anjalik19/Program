const readline = require("readline-sync");
const fs = require("fs");
let content=fs.readFileSync('./inventory.json');
let data = JSON.parse(content);
console.log(data);
let length=data.Rice.length;
for(let i=0;i<length;i++)
{
    let name=data.Rice[i].Name;
    let weight=data.Rice[i].Weight;
    let price=data.Rice[i].price;
    console.log("Total price of rice:",price);
}
