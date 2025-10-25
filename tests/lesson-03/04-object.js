//Bai 1
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

//In ra nam san xuat xe
console.log(car.year);

//Bai 2
let person = {
    name: "MeoMeo",
    address: {
        street: "33 Le Duan",
        city: "Ho Chi Minh",
        country: "Viet Nam"
    }

};
//In ra ten duong
console.log(person["address"]["street"]);

//Bai 3
let student = {
  name: "Tran",
  grades: {
    math: 9,
    english: 8
  }
};

//Truy cap diem mon Toan
console.log(student["grades"]["math"]);

//Bai 4
let settings = {
  volume: 25,
  brightness: 80
};

//Thay doi gia tri volumn
settings.volume = 75;

//In ra object moi
console.log(settings);

//Bai 5
let bike = {
  brand: "Honda",
  model: "SH"
};

//Them color
bike.color = "White";

//In ra object sau khi them color
console.log(bike);

//Bai 6
let employee = {
  name: "Nguyen Van A",
  age: 27
};

//Xoa age
delete employee.age;

//In object sau khi xoa
console.log(employee);

//Bai 7
const school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"]
};

//In ra object school
console.log(school);
