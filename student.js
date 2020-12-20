class Students extends Person {

    // Constructor 👷‍♂️
    constructor(surename, lastname, height, gender, age,
        department, classyear, grades) {
        super(surename);
        super(lastname);
        super(height);
        super(gender);
        super(age);
        this.department = department;
        this.classyear = classyear;
        this.grades = grades;
    }
}