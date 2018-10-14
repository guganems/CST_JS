function Person(name, surname, personalNumber){
    this.name = name;
    this.surname = surname;
    this.personalNumber = personalNumber;
}

function Lecturer(name, surname, personalNumber, subject){
    Person.call(this, name, surname, personalNumber);
    this.subject = subject;
}

function Student(name, surname, personalNumber, studentId){
    Person.call(this, name, surname, personalNumber);
    this.studentId = studentId;

    this.subjects = new Array();

    this.addSubject = function(subjectName, subjectId){
        this.subjects.push(new Subject(subjectName, subjectId));
    };
}

function Subject(name, subjectId){
    this.name = name;
    this.subjectId = subjectId;
}

var subjects = new Array();
var students = new Array();
subjects.push(new Subject("JS", "SW1"));
students.push(new Student("Guga", "Nemsitsveridze", "1234", "CST123"));
students[0].addSubject("DA", "DASDASD");

console.log(students);
console.log(subjects);
console.log(students[0].subjects);