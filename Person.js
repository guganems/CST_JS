function Person(name, surname, personalNumber){
    this.name = name;
    this.surname = surname;
    this.personalNumber = personalNumber;
}

function Lecturer(name, surname, personalNumber, subject){
    Person.call(this, name, surname, personalNumber);
    this.subject = subject;
}

function Student(name, surname, personalNumber, studentId, university){
    Person.call(this, name, surname, personalNumber);
    this.studentId = studentId;
    this.university = university;

    this.subjects = new Array();

    this.addSubject = function(newSubjectId, subjectsArray){
        for(let i = 0; i < subjectsArray.length; i++){
            if(subjectsArray[i].subjectId == newSubjectId){
                this.subjects.push(subjectsArray[i]);
                break;
            }
        }
    };
}

function Subject(name, subjectId){
    this.name = name;
    this.subjectId = subjectId;
    this.lecturer = undefined;

    this.students = new Array();

    this.addStudent = function(newStudentId, studentsArray){
        for (let i = 0; i < studentsArray.length; i++){
            if (studentsArray[i].studentId == newStudentId){
                this.students.push(studentsArray[i]);
                break;
            }
        }
    }
}

function University(name){
    this.name = name;

    this.subjects = new Array();
    this.students = new Array();
    this.lecturers = new Array();

    this.findSubjectById = function(id){
        for (let i = 0; i < this.subjects.length; i++){
            if (this.subjects[i].subjectId == id){
                return this.subjects[i];
            }
        }
    }

    this.findStudentById = function(id){
        for (let i = 0; i < this.students.length; i++){
            if (this.students[i].studentId == id){
                return this.students[i];
            }
        }
    }
}

function registerStudentOnSubject(student, subject, university){
    student.addSubject(subject.subjectId, university.subjects);
    subject.addStudent(student.studentId, university.students);
}

function addLecturer (name, surname, id, subject, university){
    university.lecturers.push(new Lecturer(name, surname, id, subject));
    for (let i = 0; i < university.lecturers.length; i++){
        if (university.lecturers[i].subject.subjectId == subject.subjectId){
            subject.lecturer = university.lecturers[i];
        }
    }
}

var cu = new University("Caucasus University");

cu.subjects.push(new Subject("JS", "SW1"));
cu.subjects.push(new Subject("OOP", "SW2"));
cu.subjects.push(new Subject("C++", "SW3"));
cu.students.push(new Student("Guga", "Nemsitsveridze", "1234", "CST123", cu.name));
cu.students.push(new Student("Mariam", "Charkviani", "1244", "CST223", cu.name));

addLecturer("Konstantin", "Ljovin", "3321", cu.subjects[0], cu);
addLecturer("Stepan", "Oblonsky", "1321", cu.subjects[1], cu);
addLecturer("Kitty", "Shtcherbatskaya", "3333", cu.subjects[2], cu);

registerStudentOnSubject(cu.students[0], cu.subjects[0], cu);
registerStudentOnSubject(cu.students[1], cu.subjects[1], cu);
registerStudentOnSubject(cu.students[0], cu.subjects[2], cu);
registerStudentOnSubject(cu.students[1], cu.subjects[0], cu);

console.log(cu.findSubjectById("SW1"));
console.log(cu.findStudentById("CST123"));