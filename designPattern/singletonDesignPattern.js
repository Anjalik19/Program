/******************************************************************************
* Execution : 1. default node cmd> node singletonDesignPattern.js
*             2. if nodemon installed cmd> nodemon singletonDesignPattern.js
* 
* Purpose   : program to create singleton design pattern.
* @description 
* 
* @file     : singletonDesignPattern.js
* @overview : program to create singleton design pattern.
* @module   : singletonDesignPattern- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 31-11-2019
*
******************************************************************************/
let singleton = (function () {
    let instance;
    function createInstance() {
        let object = new Object("hello");
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
function run() {
    let instance1 = singleton.getInstance();
    let instance2 = singleton.getInstance();
    if (instance1 === instance2) {
        console.log("true");
    } else {
        console.log("false");
    }
}
run();