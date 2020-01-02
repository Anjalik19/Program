/******************************************************************************
* Execution : 1. default node cmd> node cliniqueManagement.js
*             2. if nodemon installed cmd> nodemon cliniqueManagement.js
* 
* Purpose   : program manage a list of Doctors associated with the Clinique.
* @description 
* 
* @file     : cliniqueManagement.js
* @overview : program manage a list of Doctors associated with the Clinique
* @module   : cliniquManagement- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 30-11-2019
*
******************************************************************************/
const readline=require("readline-sync");
const fs=require('fs');
let content=fs.readFileSync("./clinique.json");
let obj=JSON.parse(content);
console.log(obj);

class Clinique{
    constructor(obj){
        this.obj=obj;
    }
    getNameFromDoctor(obj) {
        let nameArray = [];
        let data = obj.Doctor;
        for (let key in data) {
            nameArray.push(data[key].name);
        }
        return nameArray;
    }
    getIdFromDoctor(obj) {
        let IdArray = [];
        let data = obj.Doctor;
        for (let key in data) {
            IdArray.push(data[key].id);
        }
        return IdArray;
    }
    getspecialisationFromDoctor(obj) {
        let specArray = [];
        let data = obj;
        for (let key in data) {
            specArray.push(data[key].specialisation);
        }
        return specArray;
    }
    getavailabilityFromDoctor(obj){
        let availArray=[];
        let data=obj.Doctor;
        for(let key in Data){
            availArray.push(data[key].availability);
        }
        return availArray;
    }
    getNameFrompatient(obj)
    {
        let nameArray=[];
        let data=obj.patient;
         for(let key in data){
             nameArray.push(data[key].name);
         }
         return nameArray;
    }
    getIdFrompatient(obj)
    {
        let IdArray=[];
        let data=obj.patient;
         for(let key in data){
            IdArray.push(data[key].Id);
         }
         return IdArray;
    }
   
    getphoneNumberFrompatient(obj)
    {
        let phoneNumberArray=[];
        let data=obj.patient;
         for(let key in data){
            phoneNumberArray.push(data[key].phoneNumber);
         }
         return phoneNUmberArray;
    }
    getageFrompatient(obj)
    {
        let ageArray=[];
        let data=obj.patient;
         for(let key in data){
            ageArray.push(data[key].age);
         }
         return ageArray;
    }
   
}
  let doctor = obj.Doctor;
  let patient = obj.Patient;
  let count = patient.length;
  let data=new Clinique(obj);
  let ans=0;
  while(ans!=5)
     {
     console.log("ClinicManagment");
         
     console.log('1 to search for doctor')
     console.log('2 to search for patient')
     console.log('3 to take appointment')
     
     let ans = readline.question('enter the choice :')
     if (ans == 1) {
         console.log(' 1 to search doctor by his name')
         console.log(' 2 to search doctor by his id')
         console.log(' 3 to search doctor by his specialisation')
         let choice = readline.questionInt('enter ur choice :')
         if (choice == 1) {
           
             console.log(data.getNameFromDoctor(obj));
             let name = readline.question('enter the name of the doctor :')
            while (!data.getNameFromDoctor(obj).includes(name)) {
                 console.log('enter the valid name : ' )
                 name = readline.question('enter the name u want to search :')
             }
             for (let key in doctor) {
                 if (doctor[key].name == name) {
                     console.log('ur doctor details :')
                     console.log(doctor[key])
                 }
             }
         }
         else if (choice == 2) {
             console.log("id of the doctors are - " + data.getIdFromDoctor(obj))
             let Id = readline.question('enter the id of the doctor : ')
             while (!data.getIdFromDoctor(obj).includes(Id)) {
                 console.log('enter the valid Id :' )
                 Id = readline.question('enter the Id u want to search :')
             }
             for (let key in doctor) {
                 if (doctor[key].Id == Id) {
                     console.log('ur doctor details')
                     console.log(doctor[key])
                 }
             }
         }
         else if (choice == 3) {
             console.log("specialisation of the doctors are -"+data.getSpecialisationFromDoctor(obj))
            let specialisation = readline.question('enter the specialisation of the doctor')
             while (!data.getSpecialisationFromDoctor(obj).includes(specialisation)) {
                 console.log('enter the valid specialisation')
                 specialisation = readline.question('enter the specialisation u want to search - ')
             }
             for (let key in Doctor) {
                 if (doctor[key].specialisation == specialisation) {
                     console.log('ur doctor details')
                     console.log(doctor[key])
                 }
             }
 
         }
         else {
             console.log('enter valid input')
         }
        }
     else if (ans == 2) {
         console.log('1 to search patient by his name')
         console.log('2 to search patient by his id')
         
         let choice = readline.questionInt('enter ur choice')
         if (choice == 1) {
             console.log(data.getNameFrompatient(obj))
             let name = readline.question('enter the name of the patient')
             while (!data.getNameFrompatient(obj).includes(name)) {
                 console.log('enter the valid name')
                 name = readline.question('enter the name u want to search')
             }
             for (let key in Patient) {
                 if (patient[key].name == name) {
                     console.log('ur patient details')
                     console.log(patient[key])
                 }
             }
         }
         else if (choice == 2) {
             console.log( data.getIdFrompatient(obj))
             let Id = readline.question('enter the id of the patient')
             while (!data.getIdFrompatient(object).includes(Id))
              {
                 console.log('enter the valid Id')
                 Id = readline.question('enter the Id u want to search')
             }
             for (let key in patient) {
                 if (patient[key].Id == Id) {
                     console.log('ur patient details')
                     console.log(patient[key])
                 }
             }
         }
         
         else {
             console.log('enter valid input :')
         }
     }
     else if (ans == 3) {
         count++;
 
         let date = new Date();
         if (count > 5) {
             let rem = Math.floor(count / 5)
         }
 
         let name = readline.question("enter the patientname :")
         let age = readline.questionInt("enter the age of the patient :")
         let Id = Math.floor(Math.random() * 100000)
         let phoneNumber = readline.questionInt('enter the phoneNumber :')
         while (phoneNumber > 9999999999 || phoneNumber < 999999999) {
             console.log("number should be of 10 digit")
             phoneNumber = readline.questionInt('enter different phone number :')
         }
         console.log("doctors that are present are")
         console.log(data.getNameFromDoctor(obj));
         obj.Patient.push({
             "name": name,
             "Id": Id,
             "phoneNumber": phoneNumber,
             "age": age,
 
         })
         fs.writeFile('cliniqueManagement.json', JSON.stringify(obj))
     }
     else
         console.log('enter valid input :')
 }
 