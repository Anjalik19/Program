let detail=require("./commercialData");
let readline=require("readline-sync");
let fs=require('fs');
let data=fs.writeFileSync("./commercialData.json");
let content=JSON.parse(data);
let length=data.accountList.length;
let array=[];
for(let i=0;i<length;i++)
{
let accountName=data.accountList[i].account_Name;
let shareNumber=data.accountList[i].share_number;
let stockPrice=data.accountList[i].stock_price;
let shop=new Comment(account_Name,share_number,stock_price)
let total=shop.buy();
console.log("Account name:",account_Name,"Share number",share_number,"Stock price",stock_price);
let data1={
    "Account name":account_Name,
    "Share number":share_number,
    "Stock Price":stock_price
    
}
array.push(data1);
consple.log("array",array);
let value=JSON.stringify(array);
fs.writeFile('newData.json',value);
}