const Person = new Object();
Person.surename = 'Jan';
Person.lastname = 'Kammellander';
Person.height = '174';
Person.gender = '👨';
Person.age = 16;

const Student = Object.create(Person);
const { subjects, department, classyear } = Student;

const Teacher = Object.create(Person);
const { subjects, educates, workinghours } = Teacher;