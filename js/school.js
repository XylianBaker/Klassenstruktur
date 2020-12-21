class Person {

    // Constructor 👷‍♂️
    constructor(surename, lastname, height, gender, age) {
        this.surename = surename;
        this.lastname = lastname;
        this.height = height;
        this.gender = gender;
        this.age = age;
    }

    setGender(gender) {
        this.surename = gender;
    }

    getGender() {
        return this.gender;
    }

    toString() {
        const notation = this.gender == '🤵' ? 'Herr 🤵' : 'Frau 💃';
        return `Mein Name ist ${notation} ${this.surename} ${this.lastname}.\n
        Ich bin ${this.height} cm groß 📏 und ${this.age} alt.`;
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

    toString() {
        const str = super.toString();
        const anwesend = this.attendance == 'ja' ? 'Anwesend' : ' nicht Anwesend';
        return `${str} \n 
        Ich bin Schüler der Abteilung ${this.classyear}${this.department} und habe die Note 
        ${this.grades}. \n Ich bin ${anwesend}.`
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

// Test 🧪
const p = new Person('Jan', 'Kammellander', 173, '🤵', 16);
const s = new Students('Dominik', 'Bosnic', 171, '🤵', 18, 'HIT🏢', '3B', 1, 'ja');
const t = new Teacher('Monika', 'Reichard', 160, '💃', 58);

console.log(p.toString());
console.log(s.toString());

// JSON ☕
const fs = require('fs');

// convert JSON object 📦 to a string 🧵
let data = JSON.stringify(p, null, 2);
data += JSON.stringify(s, null, 2);
data += JSON.stringify(t, null, 2);

// write file 📁 to disk 💿
fs.writeFile('../json/school.json', data, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`);
    } else {
        console.log(`File is written successfully!`);
    }
});