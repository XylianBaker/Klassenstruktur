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

const p = new Person.constructor('Jan', 'Kammellander', '173', '👨', '16');

for (const iterator of p) {
    console.log(iterator);
}