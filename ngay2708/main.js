//Bài 1:
/*
const name = "Thủy"; // kiểu string
const age = 21; // kiểu number
const isStudent = true; // kiểu boolean
let address; // undefined
const phone = null; //null
const scores = [8, 9, 7]; //array
const user = { //object
    name: "Thủy",
    age: 21
};
console.log("Bài 1")
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof phone);// nếu là typeof thì sẽ là object
console.log(typeof scores);// luôn là object chỉ kiểm tra xem nó có phải array k thui
console.log(Array.isArray(scores));
console.log(typeof user);

// Bài 2:

console.log("Bài 2")
console.log(typeof 100); //number
console.log(typeof "100"); //string
console.log(typeof 3.14); //number
console.log(typeof "3.14"); //string
console.log(typeof true); //boolean
console.log(typeof "true"); //string

// Bài 3:
const student = {
    name: "Thủy",
    age: 21,
    score: 8.5,
    isStudent: true
};
console.log("Bài 3")
console.log(student["name"]);
console.log(student["age"]);
console.log(student["score"]);
console.log(student["isStudent"]);
student.address = "Hà Nội";
console.log(student);
student["score"] = 9;
console.log(student);

// bài 4
console.log("Bài 4")
console.log(5 == "5");//true
console.log(5 === "5");//false

console.log(10 != "10");//false
console.log(10 !== "10");//true

console.log(10 > 5);//true
console.log(10 < 5);//false

console.log(10 >= 10);//true
console.log(5 <= 3);// false


//Bài 5:

const age = 21;
const hasStudentCard = true;
const hasMoney = false;
console.log("Bài 5");
console.log(age >= 18 && hasStudentCard);//true

console.log(age < 18 || hasStudentCard);//true

console.log(!hasMoney);//true

console.log(age >= 18 && hasMoney);//false

console.log(age < 18 || hasMoney);//false
*/
//Bài 6:
/*Nếu điểm >= 8
→ Giỏi

Nếu điểm >= 6.5
→ Khá

Nếu điểm >= 5
→ Trung bình

Còn lại
→ Yếu
console.log("Bài 6");
function xeploai(diem){
if(diem >= 8){
    return "Giỏi";
}else if(diem >= 6.5){
    return "Khá"
}else if(diem >= 5){
    return "TB"
}else{
    return "Yếu"
}};
console.log(xeploai(4));
*/
//Bài 7: Chuyển các function sau sang Arrow Function.

/*function sayHello() {
    return "Hello";
}*/
const sayHello = () => "Hello"

/*function sum(a, b) {
    return a + b;
}
const sum = (a, b) => a + b;

/*function square(x) {
    return x * x;
}
const square = x => x * x;

//Bài 8:Template Literal
// viết câu Xin chào, tôi tên là Thủy, tôi 21 tuổi và đang ở Hà Nội.
const name = "Thủy";
const age = 21;
const address = "Hà Nội";
console.log(`Xin chào, tôi tên là ${name}, tôi ${age} tuổi và đang ở ${address}`)

//Bài 9:Array Destructuring
const number = [10, 20, 30];
const [a, b, c] = number;
console.log(a)
*/
//Bài 10:Bỏ qua phần tử
/*
const numbers = [10, 20, 30, 40];
//Dùng destructuring
const [a, , c] = numbers;
console.log();
*/

//Bài 11:Object Destructuring
const student = {
    name: "Thủy",
    age: 21,
    score: 8.5
};
const {name} = student;
const {age} = student;
const {score} = student;
console.log(name, age, score);

