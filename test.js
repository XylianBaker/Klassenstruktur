// Cosntructure Syntax 🚧
const Person = new Object();
Person.surename = 'Jan';
Person.lastname = 'Kammellander';
Person.height = '174';
Person.gender = '👨';
Person.age = 16;

// Constructor 👷‍♂️
function School(name, location) {
    this.name = name;
    this.location = location;

    this.whereIsTheSchool = function() {
        return `Die Schule ist in ${this.location}.`;
    }
}

const school = new School('TGM🏢', 'Wien🌏');
console.log(school.whereIsTheSchool());

// Object literal syntax 🤺
const teacher = {
    surename: 'Jan',
    lastname: 'Kammellander',
    height: 172,
    gender: '👨',
    age: '16',
    // Method 🍳 --> ➡ Function uses global 🌆 variables
    works: () => {

    },
    // uses local🏡 variables 
    worktime() {

    },
};
Person.subject = 'maths➗';

// Static Method 🗿 --> best for inheriting an existing Object "Vererbung"
// Using the Person 🤺 as an Prototyp

const student = Object.create(Person);

const classyear = '3BHIT';
student.classyear;

// Destructering 🧨
const { subjects, department } = student;

// defines the propertyp of an Object📦
Object.defineProperty(student, 'classyear', {
    value: '3BHIT🏫',
});

// defindes getter-Method 🎁
Object.defineProperty(student, 'subject', {
    get: () => 'maths➗',
});

console.log(student.subject);
// Original Object 🧭
console.log(Object.getPrototypeOf(student));