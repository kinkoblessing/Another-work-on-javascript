function averageOfThree(a, b, c) {
    return (a + b + c)/3;
}
function getLetterGrade(average) {
    if(average >= 90) return "A";
    if(average >= 80) return "B";
    if(average >= 70) return "c";
}
function PrintReportCard(name, average, grade) {
    console.log(`${name}`);
    console.log(`${average}`);
    console.log(`${grade}`);
}
PrintReportCard("Blessing", averageOfThree(70, 88, 50), getLetterGrade(70, 88, 50));