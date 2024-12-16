const studentsAverageGrade = 5;

switch (true)
{
    case studentsAverageGrade < 60:
        console.log("Незадовільно");
        break;
    case studentsAverageGrade > 60 && studentsAverageGrade <= 70:
        console.log("Задовільно");
        break;
    case studentsAverageGrade > 71 && studentsAverageGrade <= 80:
        console.log("Добре");
        break;
    case studentsAverageGrade > 81 && studentsAverageGrade <= 90:
        console.log("Дуже добре")
        break;
    case studentsAverageGrade > 91 && studentsAverageGrade <= 100:
        console.log("Відмінно")
        break;
    default:
        console.log("Unknown result");
}
