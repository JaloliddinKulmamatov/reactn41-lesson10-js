function getNamesWithGrade(grade) {
  return students
    .filter(student => {
      if (grade === 5) {
        return student.percent >= 85 && student.percent <= 100;
      } else if (grade === 4) {
        return student.percent >= 70 && student.percent < 85;
      } else if (grade === 3) {
        return student.percent >= 60 && student.percent < 70;
      } else {
        return false; // Invalid grade
      }
    })
    .map(student => student.name);
}

function addGradeToStudents() {
  return students.map(student => {
    if (student.percent >= 85 && student.percent <= 100) {
      student.grade = 5;
    } else if (student.percent >= 70 && student.percent < 85) {
      student.grade = 4;
    } else if (student.percent >= 60 && student.percent < 70) {
      student.grade = 3;
    } else {
      student.grade = undefined; // Invalid grade
    }
    return student;
  });
}

// Example of using the functions
const studentsWithGrade = addGradeToStudents();
console.log(studentsWithGrade);

const namesWithGrade5 = getNamesWithGrade(5);
console.log(namesWithGrade5);
