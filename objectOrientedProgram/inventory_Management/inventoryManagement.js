const readline = require("readline-sync");
const fs = require("fs");
let content=fs.readFileSync('./inventoryManagement.json');
let data = JSON.parse(content);
console.log(data);
let length=data.Rice.length;
let arr=[];
let count=0;
console.log("-----------Rice--------------");
for(let i=0;i<length;i++)
{
    let name=data.Rice[i].name;
    let weight=data.Rice[i].weight;
    let price=data.Rice[i].price;
    count+=data.Rice[i].price;
    console.log("price of each rice is:",name +"="+price);
}
console.log("Total price of rice is:",count);
    let info1={
        name:"name",
        weight:"weight",
        price:"price"
    }
arr.push(info1);
console.log("arr",arr);
let data1=JSON.stringify(arr);
    fs.writeFile("newData.json", data1, function (err) {
        if (err) {
            console.log(err);
        }
    });
