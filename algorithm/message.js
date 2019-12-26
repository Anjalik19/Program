/******************************************************************************
* Execution : 1. default node cmd> node message.js
*             2. if nodemon installed cmd> nodemon message.js
* 
* Purpose   : Customize Message Demonstration using String Function and RegEx
* 
* @description 
* 
* @file     : message.js
* @overview : Customize Message Demonstration using String Function and RegEx
* @module   : message- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 19-11-2019
*
******************************************************************************/
let readline = require("readline-sync");
let util = require("../utility/algorithmUtility");
try{
let firstName, lastName, fullName, contactNumber, date;
let message = "Hello <<name>>, We have your full name as <<full name>> in our system."
    + "Your contact number is 91-XXXXXXXXXX. Please, let us know in case of any clarification."
    + "Thank you BridgeLabz 01/01/2016.";
firstName = readline.question("Enter Your First Name : ")
lastName = readline.question("Enter Your Last Name : ")
fullName = firstName + ' ' + lastName;
contactNumber = readline.question("Enter contact number : ")
date = readline.question("Enter date in dd/mm/yyyy format: ")
util.data(message, firstName, lastName, fullName, contactNumber, date);
}
catch(err)
{
    console.log(err);
}


