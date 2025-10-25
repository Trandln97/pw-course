//Bai 1 - Tính tổng từ 1 đến 100.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

//Bai 2 - In bảng cửu chương từ 2 đến 9.
for (let i = 2; i <= 9; i++) {
    console.log(`\nBảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

//Bai 3 - Tạo một mảng chứa các số lẻ từ 1 đến 99.
const oddNumbers = [];

for (let i = 1; i <= 99; i += 2) {
    oddNumbers.push(i);
}

console.log(oddNumbers);

//Bai 4 - In ra 10 email dựa trên tên người dùng và số thứ tự
for (let i = 1; i <= 10; i++) {
  const email = `user${i}@example.com`;
  console.log(email);
}

//Bai 5 - Tính tổng doanh thu của 12 tháng trong năm
const revenues = [
  { month: 1, total: 125 },
  { month: 2, total: 110 },
  { month: 3, total: 150 },
  { month: 4, total: 135 },
  { month: 5, total: 170 },
  { month: 6, total: 160 },
  { month: 7, total: 140 },
  { month: 8, total: 180 },
  { month: 9, total: 200 },
  { month: 10, total: 195 },
  { month: 11, total: 210 },
  { month: 12, total: 222 }
];

let totalRevenue = 0;
for (let i = 0; i < revenues.length; i++) {
  totalRevenue += revenues[i].total;
}

console.log("Tổng doanh thu cả năm:", totalRevenue);
