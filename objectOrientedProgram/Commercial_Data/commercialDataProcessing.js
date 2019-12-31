let readline=require("readline-sync");
let fs=require('fs');
let content=fs.readFileSync("./commercialData.json");
let data=JSON.parse(content);
console.log(data);
let y,n;
let name=readline.question("having an account already?(y/n)",y,n);
if(y){
content=fs.readFileSync("./commercialData.json");
data=JSON.parse(content);
console.log(data);
}
let length=data.accountList.length;
let id=readline.question("enter your id:");
{
    if(id==1)
    {
        
        let name=data.accountList[0].account_name;
        let id=data.accountList[0].customer_id;
        let share=data.accountList[0].share_number;
        let price=data.accountList[0].stock_price;
        console.log("name:",name,"id:",id,"share:",share,"price:",price);
    }
    
}
if(n)
{
    console.log("enter your detail:");
}