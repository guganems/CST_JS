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

    this.addSubject = function(newSubjectId, subjectsArray){
        for(let i = 0; i < subjectsArray.length; i++){
            if(subjectsArray[i].subjectId == newSubjectId){
                this.subjects.push(subjectsArray[i]);
            }
        }
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
students[0].addSubject("SW1", subjects);
students[0].addSubject("SW2", subjects);

console.log(students);
console.log(subjects);
console.log(students[0].subjects);