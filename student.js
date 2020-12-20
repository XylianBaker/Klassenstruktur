class Students extends Person {

    // Constructor 👷‍♂️
    constructor(surename, lastname, height, gender, age,
        department, classyear, grades) {
        super(surename, lastname, height, gender, age);
        this.department = department;
        this.classyear = classyear;
        this.grades = grades;
    }
}