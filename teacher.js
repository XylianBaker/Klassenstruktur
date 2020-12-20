class Teacher extends Person {
    constructor(surename, lastname, height, gender, age, subject, department) {
        super(surename);
        super(lastname);
        super(age);
        super(height);
        super(gender);
        this.subject = subject;
        this.department = department;
    }

}