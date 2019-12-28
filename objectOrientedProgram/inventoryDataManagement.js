const readline = require("readline-sync");
const fs = require("fs");
let content=fs.readFileSync('./inventory.json');
let data = JSON.parse(content);
console.log(data);
let length=data.Rice.length;
let count=0;
console.log("-----------Rice--------------");
for(let i=0;i<length;i++)
{
    let name=data.Rice[i].name;
    let weight=data.Rice[i].weight;
    let price=data.Rice[i].price;
    count+=data.Rice[i].price;
    console.log("price of each rice is:",name +":"+price);
}
console.log("Total price of rice is:",count);
console.log("-----------Pulses--------------");
let lengths=data.Pulses.length;
for(let j=0;j<lengths;j++)
{
    let name=data.Pulses[j].name;
    let weigth=data.Pulses[j].weight;
    let price=data.Pulses[j].price;
    count=count+data.Pulses[j].price;
    console.log("price of each pulses is:",name +":"+price);
}
console.log("Total price of pulses is:",count);
console.log("-----------Wheat-------------");
let leng=data.Wheats.leng;
for(let k=0;k<length;k++)
{
let name=data.Wheats[k].name;
let weight=data.Wheats[k].weight;
let price=data.Wheats[k].price;
count+=count+data.Wheats[k].price;
console.log("price of each weight is:",name +":"+price);
}
console.log("Total price of wheats is:",count);