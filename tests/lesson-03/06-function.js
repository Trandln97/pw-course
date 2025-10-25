//Bai 1 - multiply
function multiply(a, b) {
    const result = a * b;
    console.log(`${a} x ${b} = ${result}`);
}
multiply(3, 5);
multiply(8, 11);

//Bai 2 - findMin
function findMin(a, b, c) {
    let min = a;
    if (b < min)
        min = b;
    if (c < min)
        min = c;
    return min;
}
console.log("Giá trị nhỏ nhất của 11, 8, 9 là", findMin(11, 8, 9));

//Bai 3 - getTopStudents
const students = [
    { name: "An", score: 8 },
    { name: "Nam", score: 6 },
    { name: "Minh", score: 9 },
    { name: "Linh", score: 5 },
    { name: "Long", score: 7 }
];

function getTopStudents(students, threshold) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }
    return topStudents;
}
const threshold = 6.5;
const topStudents = getTopStudents(students, threshold);
console.log("Danh sách học sinh đạt điểm cao:", topStudents);

//Bai 4 - calculateInterest
function calculateInterest(principal, rate, years) {
  const total = principal + (principal * rate * years) / 100;
  return total;
}
const principal = 5000; 
const rate = 5;      
const years = 4;       

const totalAmount = calculateInterest(principal, rate, years);
console.log(`Tổng số tiền sau ${years} năm là: ${totalAmount}`);
