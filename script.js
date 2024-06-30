const students = [
  { name: 'Alice', firstTestGrade: 7.5, secondTestScore: 7.0 },
  { name: 'Marcelo', firstTestGrade: 9.5, secondTestScore: 8.0 },
  { name: 'Pedro', firstTestGrade: 6.5, secondTestScore: 5.0 },
];

function calculateAverage(firstTestGrade, secondTestScore) {
  return (firstTestGrade + secondTestScore) / 2;
}

function checkApproval(students) {
  const minimumAverage = 7;
  students.forEach((student) => {
    const average = calculateAverage(
      student.firstTestGrade,
      student.secondTestScore
    );
    if (average >= minimumAverage) {
      alert(
        `${
          student.name
        } foi aprovado(a) no concurso com média ${average.toFixed(2)}`
      );
    } else {
      alert(`${student.name} foi reprovado(a) com média ${average.toFixed(2)}`);
    }
  });
}

checkApproval(students);
