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

// ------------------------- Objects -----------------------------

const leasterbook = new Instructor({
    name: 'Mr. LeasterBook',
    location: 'Black Diamond',
    age: 37,
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `Definately not a cop`
});

const mark = new Instructor({
    name: 'Clark Taylor',
    location: 'Bellevue',
    age: 50,
    favLanguage: 'C++',
    specialty: 'Mechanical Programming',
    catchPhrase: `I hate Apple`
});

const joe = new Student({
    name: 'Joe DeShoot',
    location: 'Covington',
    age: 27,
    favLanguage: 'MSDOS',
    specialty: 'Retroactive Programming',
    catchPhrase: `The 80's never died`
});

const brandon = new Student({
    name: 'brandon Lauer',
    location: 'Vashon Island',
    age: 26,
    favLanguage: 'C++',
    specialty: 'Mechanical Engineering',
    catchPhrase: `It's a puzzle`
});

const britt = new ProjectManager({
    name: 'Britt Flemming',
    location: 'Israel',
    age: 30,
    favLanguage: 'JavaScript',
    specialty: 'Classes',
    catchPhrase: `I love puns`
});

const dan = new ProjectManager({
    name: 'Lt. Dan',
    location: 'San Francisco',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'Scope',
    catchPhrase: `I love CHAOS`
});
