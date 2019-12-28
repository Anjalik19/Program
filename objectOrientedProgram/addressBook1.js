class address
{
constructor(addressBook)
{
    this.addressBook;
}
newAddress=(address_book)=>
{
    let name = read.question("enter first name:");
    let lastname = read.question("enter last name:");
    let address=readline.question("enter the address:")
    let state = read.question("enter the state:");
    let city = read.question("enter the city:");
    let pincode = read.question("enter the pincode:");
    let phonenumber = read.question("enter your phonenumber:");
    addressBook.address_book.push(
        {
            "first_name":name,
            "last_name":lastname,
            "address":address,
            "state":state,
            "city":city,
            "pincode":pincode,
            "phone_number":phonenumber
        }
    )
}
}

