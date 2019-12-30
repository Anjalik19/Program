let readline=require("readline-sync");
let fs=require('fs');
let content=fs.readFileSync("./commercialData.json");
let data=JSON.parse(content);
console.log(data);
let y;
let name=readline.question("having an account already?(y/n)",y);
try{
if(name==y){
content=fs.readFileSync("./commercialData.json");
data=JSON.parse(content);
console.log(data);
}
else
{
    console.log("file not found");
}}
catch(err)
{
    console.log(err);

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
let quantity=readline.question("how many shares you want to buy:");
data[share_number]+=quantity;





var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}