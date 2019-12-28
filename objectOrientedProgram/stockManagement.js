const readline=require("readline-sync");
const fs=require('fs');
let content=fs.readFileSync("./stock.json");
let data=JSON.parse(content);
console.log(data);
let length=data.stock_report.length;
let count=0;
for(let i=0;i<length;i++)
{
    let name=data.stock_report[i].stock_name;
    let price=data.stock_report[i].share_price;
    console.log("price of each stock:",name,"=",price);
    count=count+data.stock_report[i].share_price;
}
console.log("Total price of share:",count);