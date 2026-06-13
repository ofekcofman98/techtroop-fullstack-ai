export class Person {
    constructor(name, startYear) {
        this.name = name;
        this.startYear = startYear;
        this.courses = [];
    }
    
    addCourse(course) {
        this.courses.push(course);
    }
}

export class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(name, startYear);
        this.salary = salary;
    }
}

export class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear);
        this.grades = [];
    }
}

export class Principal extends Person {
    constructor(name, startYear) {
        super(name, startYear);
        this.teachers = [];
        this.students = [];
    }

    hireTeacher(teacher) {
        this.teachers.push(teacher);
        console.log(`${this.name} just hired ${teacher.name}`);
    }

    recruitStudent(student) {
        this.students.push(student);
    }

    expelStudent(student) {
        this.students = this.students.filter(s => s.name !== student.name);
    }

    transferStudent(student, principal) {
        this.expelStudent(student);
        principal.recruitStudent(student);
    }
}