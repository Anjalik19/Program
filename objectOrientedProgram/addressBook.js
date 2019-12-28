const readline=require("readline-sync");
const fs=require('fs');
let content=fs.readFileSync("./addressBook.json");
let data=JSON.parse(content);
console.log(data);
let name=readline.question("enter the name of person you want to search:")
if(name===data.address_book.first_name)
{
    console.log(name);
}