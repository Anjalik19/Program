let detail=require("./commercialData");
let readline=require("readline-sync");
let fs=require('fs');
let content=fs.readFileSync("./commercialData.json");
let data=JSON.parse(content);
let length=data.accountList.length;
let array=[];
for(let i=0;i<length;i++)
{
let accountName=data.accountList[i].account_Name;
let shareNumber=data.accountList[i].share_number;
let stockPrice=data.accountList[i].stock_price;
let shop=new detail(accountName,shareNumber,stockPrice)
let total=shop.buy();
console.log("Account name:",accountName,"Share number",shareNumber,"Stock price",stockPrice);
console.log("total price of rice is:",total);
let data1={
   account_name: "Account name",
   share_number: "Share number",
   stock_price:"Stock Price"
    
}
array.push(data1);
console.log("array",array);
let value=JSON.stringify(array);
fs.writeFile('newData.json',value);
}