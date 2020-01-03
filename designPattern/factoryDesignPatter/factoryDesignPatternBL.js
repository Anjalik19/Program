exports.factoryDesign=()=>
{
function pc(name,ram)
{
this.name=name;
this.ram=ram;
this.type="pc";
}
function laptop(name,ram)
{
    this.name=name;
    this.ram=ram;
    this.type="laptop";
}
function server(name,ram)
{
    this.name=name;
    this. ram=ram;
    this.type="server";
}
function computerFactory()
{
    this.create=(name,type,ram)=>
    {
switch(type)
{
    case 1:return new pc(name,ram);
    break;
    case 2:return new laptop(name,ram);
    break;
    case 3:return new server(name,ram);
}
    }
}
function show()
{
    console.log("hello..i am",this.name,"and i am a",this.type,'my ram is:',this.ram);
}
const factory=new computerFactory();
let arr=[];
arr.push(factory.create("Zebronic",1,'6GB'));
arr.push(factory.create("aser",2,'8GB'));
arr.push(factory.create("viao",2,'7GB'));
arr.push(factory.create("hp",1,'4GB'));
arr.push(factory.create("Proxy server",3,'16GB'));
arr.push(factory.create("web server",3,'20GB'));
arr.forEach(comp => {
    show.call(comp)
});
}
