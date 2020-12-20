class Teacher extends Person {
    // Constructor 👷‍♂️
    constructor(surename, lastname, height, gender, age, subject, department) {
        super(surename, lastname, height, gender, age);
        this.subject = subject;
        this.department = department;
    }
}