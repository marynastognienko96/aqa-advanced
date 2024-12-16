const studentsAverageGrade = 95;

if (studentsAverageGrade < 60) {
    console.log("Незадовільно");
} else if (studentsAverageGrade > 60 && studentsAverageGrade <= 70)
{
    console.log("Задовільно");
} else if (studentsAverageGrade > 71 && studentsAverageGrade <= 80)
{
    console.log("Добре");
} else if (studentsAverageGrade > 81 && studentsAverageGrade <= 90)
{
    console.log("Дуже добре")
} else if (studentsAverageGrade > 91 && studentsAverageGrade <= 100)
{
    console.log("Відмінно")
}
