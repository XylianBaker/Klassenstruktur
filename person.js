// Object literal syntax 🤺
const Person = {
    surename: 'Jan',
    lastname: 'Kammellander',
    height: 172,
    gender: '👨',
    age: '16'
}

// Cosntructure Syntax 🚧
const teacher = new Object();
teacher.subject = 'maths➗';

// Static Method 🗿 --> best for inheriting an existing Object "Vererbung"
// Using the Person 🤺 as an Prototyp
const student = Object.create(Person);