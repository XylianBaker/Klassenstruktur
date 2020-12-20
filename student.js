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