
const readsync=require('readline-sync');
let util = require("../utility/dataStructureUtility");
        let str= readsync.question("Enter the string:");
        let result=util.palindrome(str);
console.log(result);