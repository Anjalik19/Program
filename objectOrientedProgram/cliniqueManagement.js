const readline=require("readline-sync");
const fs=require('fs');
let content=fs.readFileSync("./clinique.json");
let data=JSON.parse(content);
console.log(data);
console.log("whom you want to search Doctor or Patient:")
console.log("if you want to select Doctor press d:",length);
let length=data.Doctor.length;
for(let i=0;i<length;i++)
{
    let name=data.Doctor[i].name;
    let id=data.Doctor[i].id;
    let specialization=data.Doctor[i].specialization;
    let availability=data.Doctor[i].availability;
console.log("name:",name,"id:",id,"specialization:",specialization,"availability:",availability);
}