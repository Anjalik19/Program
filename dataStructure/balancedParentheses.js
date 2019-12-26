const readline = require("readline-sync");
let util = require("../utility/dataStructureUtility");
let string="(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)";
let result=util.balancedParentheses(string)?"Balanced" : "Not Balanced"
console.log(result);

