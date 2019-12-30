const readline=require("readline-sync");
const fs=require('fs');
let content=fs.readFileSync("./clinique.json");
let data=JSON.parse(content);
console.log(data);
let doc=data.Doctor;
let patient=data.Patient;
console.log("whom you want to search Doctor or Patient:");
let option=readline.question("type doc to search doctor or type patient to search for patient:",doc)  ;
if(option==doc)
{
console.log(doc);
} 
else(option==patient)
{
console.log(patient);

}

/*        let doctorObj;
        let docs = [];
        this.patientObj;
        this.patients = [];
    
    cliniqueDoctor()
     {
        doctorObj = JSON.parse(fs.readFileSync('doctors.json', 'utf-8'));
        for (let i = 0; i < this.doctorObj.length; i++) {
            this.docs.push(new Doctor(this.doctorObj[i]["name"], this.doctorObj[i]["id"], this.doctorObj[i]["specialization"], this.doctorObj[i]["availabity"], this.doctorObj[i]["patients"]));
        }
    }
    cliniquePatients() {
        this.patientObj = JSON.parse(fs.readFileSync('patients.json', 'utf-8'));
        for (let i = 0; i < this.patientObj.length; i++)
            this.patients.push(new Patient(this.patientObj[i]["name"], this.patientObj[i]["id"], this.patientObj[i]["mobile_number"], this.patientObj[i]["age"]));
    }
    */
    addPatient()
     {
        let doctor_name = input.question("enter name of doctor under whom you want be treated ");
        let d = searchByDocName(doctor_name);
        if (d.numberOfPatients > 5) {
            console.log("doctor has a busy schedule today, would u like to reschedule your appointment");
        }
        else {
            let name = readline.question("enter name : ");
            let  id = readline.question("enter ID : ");
            let  mobile_number = readline.question("enter mobile number : ");
            let age = readline.question("enter age : ");
            clinique.Patient.push(new Patient(name, id, mobile_number, age));
            if (d._availabity == "am")
                console.log("appointment to the patient is fixed today in the morning ");
            else if (d._availabity == "pm")
                console.log("appointment to the patient is fixed today in the afternoon");
            else{
                console.log("appointment to the patient is fixed today come at any time ");
            }
                d.numberOfPatients++;
        }

    }
    searchByDocName(name) 
    let length=data.Doctor.length;
    {
        for (let i = 0; i <length; i++) {
            if (data.Doctor[i].name == name)
                return data.Doctor[i];
        }
        return "no doctor's found";
    }
    searchByDocId(id) 
    {
        for (let i = 0; i < length; i++) {
            if (data.Doctor[i].id == id)
                return data.Doctor[i];
        }
        return "no doctor's found";
    }
    searchByDocSpecialization(specialization) 
    {
        for (let i = 0; i < length; i++) {
            if (data.Doctor[i].specialization == specialization)
                return data.Doctor[i];
        }
        return "no doctor's found";
    }
    searchByPatientName(name) 
    length=data.Patient.length;
    {
        for (let i = 0; i <length; i++) {
            if (data.Patient[i].name == name)
                return data.Patient[i];
        }
    }
    searchByPatientId(id) 
    {
        for (let i = 0; i <length; i++) {
            if (data.Patient[i].id == id)
                return data.Patient[i];
        }
    }
    searchByPatientPhno(mobile_number) 
    {
        for (let i = 0; i < length; i++) {
            if (data.Patient[i].mobile_number == mobile_number)
                return data.Patient[i];
        }
    }
    popularDoctors()
     {
        var max = 0;
        var val = 0;
        for (let i = 0; i < length; i++) {
            if (this.docs[i].numberOfPatients > max) {
                val = i;
                max = this.docs[i].numberOfPatients;
            }
        }
        console.log("*****************************************");
        console.log("           name : " + this.docs[val].name);
        console.log("           ID : " + this.docs[val].id);
        console.log("           Specialization : " + this.docs[val]._specialization);
        console.log("           Availability : " + this.docs[val]._availabity);
        console.log("*****************************************")
    }
 