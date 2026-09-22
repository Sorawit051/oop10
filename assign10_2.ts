class Course {
  code: string;
  name: string;
  credit: number;
  constructor(code: string, name: string, credit: number) {
    this.code = code;
    this.name = name;
    this.credit = credit;
  }
}

class Student {
  studentId: string;
  name: string;
  constructor(id: string, name: string) {
    this.studentId = id;
    this.name = name;
  }
}

class Teacher {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  evaluate(student: Student, course: Course, score: number): void {
    let grade = "F";
    if (score >= 80) grade = "A";
    else if (score >= 70) grade = "B";
    else if (score >= 60) grade = "C";
    else if (score >= 50) grade = "D";

    console.log(`Teacher: ${this.name}`);
    console.log(`Student: ${student.studentId} ${student.name}`);
    console.log(`Course: ${course.code} - ${course.name}`);
    console.log(`Score: ${score}`);
    console.log(`Grade: ${grade}`);
  }
}

// Test
const teacher = new Teacher("Smith");
const student = new Student("651001", "Anan");
const course = new Course("CS101", "Programming", 3);
teacher.evaluate(student, course, 85);