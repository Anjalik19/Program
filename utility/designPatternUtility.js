/**
 * 
 */
exports.factoryDesign=()=>
{
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
},

/**
 * 
 */

