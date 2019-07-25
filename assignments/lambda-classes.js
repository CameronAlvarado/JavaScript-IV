// CODE here for your Lambda Classes
class Person{
    constructor (attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    };
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    };
};

class Instructor extends Person{
    constructor (attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    };
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    };
    grade(student) {
        console.log(`${student.name} receives a perfect score on ${this.subject}`)
    }
};

class Student extends Instructor{
    constructor (attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    };
    listsSubjects() {
        console.log(this.favSubjects)
    };
    PRAssignment(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    };
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    };
};

class ProjectManager extends Student{
    constructor (attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp() {
        console.log(`${this.name} announces to ${this.channel}, @channel standy times!`)
    };
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    };
};

