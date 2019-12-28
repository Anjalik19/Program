let readline = require("readline-sync")
let fs = require('fs')
class address {
    constructor(addressBook) {
        this.addressBook;
    }
    newAddress = (addressbook) => {
        let name = read.question("enter first name:");
        let lastname = read.question("enter last name:");
        let address = readline.question("enter the address:")
        let state = read.question("enter the state:");
        let city = read.question("enter the city:");
        let pincode = read.question("enter the pincode:");
        let phonenumber = read.question("enter your phonenumber:");
        addressBook.address_book.push(
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
    writeFile = (fileName, data) => {
        let fs = require('fs');
        fs.writeFile(addressBook.json, JSON.stringify(addressBook), function (err) {
            if (err) {
                console.log(err);
            }
        });
        console.log("*******Address update succesfully******");
        console.log("address information as per record:\nfirstName:  ${name}   \nlastname: ${lastname}  \naddress: ${address} \ncity: ${city}  \nstate ${state} \npincode: ${zip}  \nphone number: ${phonenumber}");
        return [name, lastname, address, state, city, pincode, phonenumber];
    }
    showDetails(addressBook) {
        if (addressBook.address_book.length > 0) {
            for (let i = 0; i < addressBook.address_book.length; i++) {
                console.log(addressBook.address_book[i]);
            }
        }

    }
remove=()=>
{
    let delete1 = read.question("Please enter the index you want to delete: ");
    delete addressBook.address_book[delete1];
    for (let i = 0; i < addressBook.address_book.length; i++) {
        if (addressBook.address_book[i] == null) {
            addressBook.address_book.splice(i, 1);
        }
    }
    file.writeFile('addressBook.json', JSON.stringify(addressBook), function (err) {
        if (err) throw err
        console.log('Done!')
    })
}

}


