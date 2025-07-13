/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */
class Student {
  constructor(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }
  addGrade(newGrade) {
    newGrade <= 100 && newGrade >= 0
      ? this.grades.push(newGrade)
      : console.error(`\n${newGrade} must be between 0 - 100`);
  }
  calcAvgGrade() {
    return this.grades.reduce((acc, cur) => acc + cur, 0) / this.grades.length;
  }
  hasPassed(passingGrade) {
    return this.calcAvgGrade() >= passingGrade;
  }
  getAge() {
    return this.age;
  }
  getName() {
    return this.name;
  }
}

//Test Student class constructor and methods:
const studentObjTest = new Student("testie", 18, [100, 0, 24, 89]);
console.log(studentObjTest.grades);
studentObjTest.addGrade(37);
console.log(studentObjTest.grades);
console.log(
  studentObjTest.calcAvgGrade(),
  studentObjTest.hasPassed(50),
  studentObjTest.getAge(),
  studentObjTest.getName()
);

class Course {
  constructor(title, students, alumni) {
    this.title = title;
    this.students = students;
    this.alumni = alumni;
  }
  enrollStudent(newStudent) {
    if (!this.students) {
      this.students = [];
    }
    this.students.push(newStudent);
  }
  graduateStudent(studentName) {
    if (!this.alumni) {
      this.alumni = [];
    }
    this.alumni.push(
      this.students.find((student) => student.name === studentName)
    );
    this.students = this.students.filter(
      (student) => student.name != studentName
    );
  }
  listStudents() {
    return this.students.map((student) => student.name);
  }
  calcClassAvgGrade() {
    return this.students
      ? this.students.reduce(
          (acc, student) => acc + student.calcAvgGrade(),
          0
        ) / this.students.length
      : 0;
  }
}
//test out the Course constructor and methods:
const student1 = new Student("John Doe", 24, [27, 89, 57]);
const student2 = new Student("Rachel Ray", 21, [92, 99, 89, 91]);

const algebra1 = new Course("Algebra I", [student1, student2]);
console.log(algebra1);
console.log(algebra1.calcClassAvgGrade());

const algebra2 = new Course("Algebra II");
console.log(algebra2.calcClassAvgGrade());
algebra2.enrollStudent(student1);
algebra2.enrollStudent(student2);
console.log(algebra2.calcClassAvgGrade());
console.log(algebra2.listStudents());
algebra1.graduateStudent("John Doe");
console.log(algebra1.listStudents());
console.log(algebra1.alumni);
