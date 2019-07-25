// CODE here for your Lambda Classes
class Person{
    constructor (attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    };
    speak() {
        return (`Hello my name is ${this.name}, I am from ${this.location}`);
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
        return (`Today we are learning about ${subject}`)
    };
    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}`)
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
        return (this.favSubjects.forEach(function(element) {
            console.log(element)
        }))
    };
    PRAssignment(subject) {
        return (`${student.name} has begun sprint challenge on ${subject}`)
    };
    sprintChallenge(subject) {
        return (`${student.name} has begun sprint challenge on ${subject}`)
    };
};

class ProjectManager extends Student{
    constructor (attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        return (`${this.name} announces to ${channel}, @${channel} standy times!`)
    };
    debugsCode(student, subject) {
        return (`${this.name} debugs ${student.name}'s code on ${subject}`)
    };
};

// ------------------------- Objects -----------------------------

const leasterbook = new Instructor({
    name: 'Mr. LeasterBook',
    location: 'Black Diamond',
    age: 37,
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `Definately not a cop`,
    favSubjects: [
        'Math',
    ],
});

const mark = new Instructor({
    name: 'Clark Taylor',
    location: 'Bellevue',
    age: 50,
    favLanguage: 'C++',
    specialty: 'Mechanical Programming',
    catchPhrase: `I hate Apple`,
    favSubjects: [
        'Political Science', 'Debate', 'Software Engineering'
    ],
});

const joe = new Student({
    name: 'Joe DeShoot',
    location: 'Covington',
    age: 27,
    favLanguage: 'MSDOS',
    specialty: 'Retroactive Programming',
    catchPhrase: `The 80's never ended`,
    favSubjects: [
        'Combat Traning',
    ],
});

const brandon = new Student({
    name: 'brandon Lauer',
    location: 'Vashon Island',
    age: 26,
    favLanguage: 'C++',
    specialty: 'Mechanical Engineering',
    catchPhrase: `It's a puzzle`,
    favSubjects: [
        'Calculus', 'Mechanical Engineering'
    ],
});

const britt = new ProjectManager({
    name: 'Britt Flemming',
    location: 'Israel',
    age: 30,
    favLanguage: 'JavaScript',
    specialty: 'Classes',
    catchPhrase: `I love puns`,
    favSubjects: [
        'Software Engineering', 'Hebrew'
    ],
});

const dan = new ProjectManager({
    name: 'Lt. Dan',
    location: 'San Francisco',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'Scope',
    catchPhrase: `I love CHAOS`,
    favSubjects: [
        'Software Engineering',
    ],
});

console.log(britt.debugsCode(joe, "math"));
console.log(dan.standUp("WEB22"));
console.log(brandon.speak());
console.log(brandon.listsSubjects());
