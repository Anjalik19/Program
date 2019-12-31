/******************************************************************************
* Execution : 1. default node cmd> node prototypeDesignPattern.js
*             2. if nodemon installed cmd> nodemon prototypeDesignPattern.js
* 
* Purpose   : program to create prototype design pattern
* @description 
* 
* @file     : prototypeDesignPattern.js
* @overview : program to create prototype design pattern
* @module   : prototypeDesignPattern- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 31-11-2019
*
******************************************************************************/
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
