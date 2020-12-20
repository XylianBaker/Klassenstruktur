// Person-Object 🤺
const Person = new Object();
Person.surename = 'Jan';
Person.lastname = 'Kammellander';
Person.height = '174';
Person.gender = '👨';
Person.age = 16;


// Student-Object 👩‍🎓👨‍🎓
const Student = Object.create(Person);
Student.classyear = 3;
Student.department = 'HIT💻';


// Teacher-Object👩‍🏫👨‍🏫
const Teacher = Object.create(Person);
Teacher.subject = 'maths➗';
Teacher.department = 'HIT💻';


// Functions 🦼
Teacher.attendance = (here) => here == 'ja' ? 'true' : 'false';
Teacher.workingWeek = (hour) => 40 - hour;


console.log(Teacher.attendance('ja'));
console.log(Teacher.workingWeek(5));


const fs = require('fs');

// convert JSON object to a string
let data = JSON.stringify(Person, null, 2);
data += JSON.stringify(Student, null, 2);
data += JSON.stringify(Teacher, null, 2);

// write file to disk
fs.writeFile('../json/app.json', data, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`);
    } else {
        console.log(`File is written successfully!`);
    }

});

// unnecessary