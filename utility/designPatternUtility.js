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
exports.observerDesign=()=>
{
    function subject()
{
  this.observers=[];
}
subject.prototype={
    subscribe:function(fn)
    {
        this.observers.push(fn);
    },
unsubscribe:function(fnToRemove)
{
    this.observers=this.observers.filter(fn=>{
       if(fn!=fnToRemove)
       {
           return fn;
       }})
    
},
fire:function()
{
this.observers.forEach(fn=>{
    fn.call();
})
}
}
const Subject=new subject();
function observer1()
{
    console.log("observer 1");
}
function observer2()
{
    console.log("observer 2");
}
function observer3()
{
    console.log("observer 3");
}
Subject.subscribe(observer1);
Subject.subscribe(observer2);
Subject.subscribe(observer3);
Subject.fire();
},

/**
 * 
 */
exports.prototypeDesign=()=>
{
    class Name{
        constructor()
        {
            this.array = [];
        }
        data()
        {
            this.array.push("preeti");
            this.array.push("rahul");
        }
        clone()
        {
            let clone = [];
            for(let i=0;i<this.array.length;i++){
                clone[i] = this.array[i];
            }
            return clone;
        }
    }
    let  prototype = () => {
        let arr1 = [];
        let arr2 = [];
        let a = new Name();
        a.data();
        arr1 = a.clone();
        arr2 = a.clone();
        arr1.push("anuj");
        arr2.push("akash");
        console.log(arr1);
        console.log(arr2);
    }
    prototype();
    
}