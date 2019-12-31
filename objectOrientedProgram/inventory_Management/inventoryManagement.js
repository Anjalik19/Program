var Rice = require('./inventorymanage.js');
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
    var company = new Rice(name, weight, price);
    var total = company.sum();
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
