let student = {
    name: "Alex",
    class: {
        name: "K19",
        major: "Automation"
    },
    finalGrade: "8.5"
}
student.class.name = "Auto";
console.log(student.finalGrade);
console.log(student.class.name);
console.log(student["class"]["name"]);

