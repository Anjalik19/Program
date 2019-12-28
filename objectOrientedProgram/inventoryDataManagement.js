const readline = require("readline-sync");
const fs = require("fs");
let content=fs.readFileSync('./inventory.json');
let data = JSON.parse(content);
console.log(data);
f