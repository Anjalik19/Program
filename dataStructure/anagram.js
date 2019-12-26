const readline = require("readline-sync");
let util = require("../utility/dataStructureUtility");
let num = 122, reversedInteger = 0, remainder, originalInteger;
originalInteger = num;
// reversed integer is stored in variable 
while( num != 0 )
{
    remainder = num % 10;
    reversedInteger = reversedInteger * 10 + remainder;
    num  /= 10;
}
// palindrome if orignalInteger and reversedInteger are equal
if (originalInteger == reversedInteger)
console.log(originalInteger + " is a palindrome.");
else
    console.log(originalInteger + " is not a palindrome.");
