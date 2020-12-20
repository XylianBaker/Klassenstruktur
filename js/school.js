class Person {

    // Constructor 👷‍♂️
    constructor(surename, lastname, height, gender, age) {
        this.surename = surename;
        this.lastname = lastname;
        this.height = height;
        this.gender = gender;
        this.age = age;
    }
}

class Students extends Person {

    // Constructor 👷‍♂️
    constructor(surename, lastname, height, gender, age,
        department, classyear, grades, attendance) {
        super(surename, lastname, height, gender, age);
        this.department = department;
        this.classyear = classyear;
        this.grades = grades;
        this.attendance = attendance;
    }
}

class Teacher extends Person {
    // Constructor 👷‍♂️
    constructor(surename, lastname, height, gender, age, subject, department) {
        super(surename, lastname, height, gender, age);
        this.subject = subject;
        this.department = department;
    }
}

const p = new Person('Jan', 'Kammellander', '173', '👨', '16');

// JSON ☕
const fs = require('fs');

// convert JSON object 📦 to a string 🧵
let data = JSON.stringify(p, null, 2);

// write file 📁 to disk 💿
fs.writeFile('../json/school.json', data, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`);
    } else {
        console.log(`File is written successfully!`);
    }

});