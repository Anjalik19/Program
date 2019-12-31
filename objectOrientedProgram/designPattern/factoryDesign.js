/******************************************************************************
* Execution : 1. default node cmd> node factoryDesignPattern.js
*             2. if nodemon installed cmd> nodemon factoryDesignPattern.js
* 
* Purpose   : program to create computer Factory that can Produce PC, Laptop
* @description 
* 
* @file     : factoryDesignPattern.js
* @overview : program to create computer Factory that can Produce PC, Laptop
* @module   : factoryDesignPattern- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 31-11-2019
*
******************************************************************************/
function pc(name)
{
this.name=name;
this.type="pc";
}
function laptop(name)
{
    this.name=name;
    this.type="laptop";
}
function server(name)
{
    this.name=name;
    this.type="server";
}
function computerFactory()
{
    this.create=(name,type)=>
    {
switch(type)
{
    case 1:return new pc(name);
    break;
    case 2:return new laptop(name);
    break;
    case 3:return new server(name);
}
    }
}
function show()
{
    console.log("hello..i am",this.name,"and i am a",this.type,);
}
const factory=new computerFactory();
let arr=[];
arr.push(factory.create("Zebronic",1));
arr.push(factory.create("aser",2,));
arr.push(factory.create("viao",2,));
arr.push(factory.create("hp",1));
arr.push(factory.create("Proxy server",3));
arr.push(factory.create("web server",3));
arr.forEach(comp => {
    show.call(comp)
});