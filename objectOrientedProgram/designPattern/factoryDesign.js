let name,type;
function developer(name,type)
{
this.name=name;
this.type="developer";
}
function tester(name,type)
{
    this.name=name;
    this.type="tester";
}
function employeeFactory()
{
    this.create=(name,type)=>
    {
switch(type)
{
    case 1:return new developer(name);
    break;
    case 2:return new tester(name);
    break;
}
    }
}
function show()
{
    console.log("hi",this.name,"you are a",this.type);
}
const factory=new employeeFactory();
let arr=[];
arr.push(factory.create("anjali",1));
arr.push(factory.create("anuj",2));
arr.push(factory.create("snigdha",2));
arr.push(factory.create("sahil",1));

arr.forEach(emp => {
    show.call(emp)
});
