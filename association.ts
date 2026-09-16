class Student{
    constructor(
        private name : string,
        private major : string
    ){}
    getStudentInfo(): string{
        return `นักศึกษา ชื่อ ${this.name} สาขา ${this.major}`;
    }
}

class Teacher{
    constructor(
        private name : string,
        private facullt : string
    ){}
    teach(student: Student): void{
        console.log(`อาจารย์ ${this.name} คณะ ${this.facullt} สอน ${student.getStudentInfo()}`);
    }
}

const s1 = new Student("sorawit","IT");
const s2 = new Student("sorawit","P.E.");
const t1 = new Teacher("Sorawit","comsci");
t1.teach(s1);
t1.teach(s2);
t1.teach(s1);