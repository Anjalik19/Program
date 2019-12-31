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