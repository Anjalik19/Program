/******************************************************************************
* Execution : 1. default node cmd> node addressBook.js
*             2. if nodemon installed cmd> nodemon addressBook.js
* 
* Purpose   : 
* 
* @description 
* 
* @file     : addressBook.js
* @overview : 
* @module   : addressBook- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 28-11-2019
*
******************************************************************************/
const readline=require("readline-sync");
const fs=require('fs');
let info=fs.readFileSync("./addressBook.js")
let content=fs.readFileSync("./addressbook.json");
let data=JSON.parse(content);
console.log(data);
console.log("1.Adding new data");
console.log("2.Modify the data");
console.log("3.Delete the data");
console.log("4.Exit");
let option=readline.questionInt("enter your choice:")
switch(option)
{
    case 1:(option=="1")
    {
        newAddress();
    }
    case 2:
        (option==2)
    {
        modify();
    }
    break;
    case 3:
    (option==3)
    {
        remove();
    }
    break;
    case 4:
        (option==4)
    {
        exit();
    }
    break;
}
newAddress(addressbook) 
    {
        let name = read.question("enter first name:");
        let lastname = read.question("enter last name:");
        let address = readline.question("enter the address:")
        let state = read.question("enter the state:");
        let city = read.question("enter the city:");
        let pincode = read.question("enter the pincode:");
        let phonenumber = read.question("enter your phonenumber:");
        addressbook.address_book.push(
            {
                "first_name": name,
                "last_name": lastname,
                "address": address,
                "state": state,
                "city": city,
                "pincode": pincode,
                "phone_number": phonenumber
            });

    }
    fs.writeFile(addressbook.json, JSON.stringify(addressbook))
    {
        let fs = require('fs');
        fs.writeFile(addressbook.json, JSON.stringify(addressbook), function (err) {
            if (err) {
                console.log(err);
            }
        });
        console.log("Address update succesfully");
    }
    showDetails(addressbook)
     {
        if (addressbook.address_book.length > 0) {
            for (let i = 0; i < addressbook.address_book.length; i++) {
                console.log(addressbook.address_book[i]);
            }
        }

    }
remove(addressbook)
{
    let delete1 = read.question("Please enter the index you want to delete: ");
    delete addressbook.address_book[delete1];
    for (let i = 0; i < addressbook.address_book.length; i++) {
        if (addressbook.address_book[i] == null) {
            addressbook.address_book.splice(i, 1);
        }
    }
    fs.writeFile('addressBook.json', JSON.stringify(addressbook), function (err) {
        if (err) throw err
        console.log('Done!')
    })
}
modify(addressbook)
{
    console.log("please enter your choice:");
    console.log("1.To modify Address");
    console.log("2.To modify State");
    console.log("3.To modify City");
    console.log("4.To modify Pincode");
    console.log("5.To modify Phone Number");
    let option=require.questionInt("enter your choice:");
    switch(option)
    {
        case 1:
            case 2:
                case 3:
                    
    }
}



