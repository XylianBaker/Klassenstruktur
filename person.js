// Cosntructure Syntax 🚧
const Person = new Object();
Person.surename = 'Jan';
Person.lastname = 'Kammellander';
Person.height = '174';
Person.gender = '👨';
Person.age = 16;

// Object literal syntax 🤺
const teacher = {
    surename: 'Jan',
    lastname: 'Kammellander',
    height: 172,
    gender: '👨',
    age: '16'
};
Person.subject = 'maths➗';

// Static Method 🗿 --> best for inheriting an existing Object "Vererbung"
// Using the Person 🤺 as an Prototyp
const student = Object.create(Person);
Object.defineProperty(student, 'subject', {
    get: () => 'maths➗',
});

console.log(student.gender);
// Original Object 🧭
console.log(Object.getPrototypeOf(student));