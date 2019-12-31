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
