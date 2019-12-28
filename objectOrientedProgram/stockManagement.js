const readline=require("readline-sync");
const fs=require('fs');
let content=fs.readFileSync("./stock.json");
let data=JSON.parse(content);
console.log(data);
let length=data.stock_report.length;