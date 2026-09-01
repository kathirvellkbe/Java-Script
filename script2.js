
//Task 1 — var, let, const

var studentName = "Kathirvel";
let studentAge = 23;
const collegeName = "Jeppiaar Institute Of Technology";

// 1. Print all three values
console.log(studentName);
console.log(studentAge);
console.log(collegeName);

// 2. Change var value
studentName = "Vetri";
console.log(studentName);

// 3. Change let value
studentAge = 24;
console.log(studentAge);

// 4. Try changing const
// collegeName = "XYZ College";
// This gives:
// TypeError: Assignment to constant variable.

// 5. Redeclare var
var studentName = "Arun";
console.log(studentName);

// 6. Redeclare let
// let studentAge = 25;
// This gives:
// SyntaxError: Identifier 'studentAge' has already been declared.


//Task 2 — User Information

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");


console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

//Task 3 — Welcome Message

let names = prompt("Enter your name:");

alert("Welcome " + names + "!");

//Task 4 — Age Calculator

let birthYear = prompt("Enter your birth year:");

let currentYear = 2026;

let ages = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", age);


//Task 5 — Identify Data Types

let value1 = "Hello";
let value2 = 100;
let value3 = 25.5;
let value4 = true;
let value5 = false;
let value6 = undefined;
let value7 = null;

console.log(typeof value1);
console.log(typeof value2);
console.log(typeof value3);
console.log(typeof value4);
console.log(typeof value5);
console.log(typeof value6);
console.log(typeof value7);

//Task 6 — Student Data

let student = {
    name: "Kathirvel",
    age: 24,
    city: "Chennai",
    qualification: "B.E",
    isStudent: true
};

// 1. Complete object
console.log(student);

// 2. Name
console.log(student.name);

// 3. Age
console.log(student.age);

// 4. Qualification
console.log(student.qualification);

// 5. isStudent
console.log(student.isStudent);

//Task 7 — Fruit Array

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

// 1. First fruit
console.log(fruits[0]);

// 2. Second fruit
console.log(fruits[1]);

// 3. Last fruit
console.log(fruits[fruits.length - 1]);

// 4. Total number of fruits
console.log(fruits.length);

//Task 8 — Basic Calculator

let a = 30;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

//Task 9 — Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;

console.log("Total =", total);


// Task 10 — Simple Marks Calculation

let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;

let averageMarks = totalMarks / 3;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);

//Task 11 — Post Increment

let c = 10;

let d = a++;

console.log(c);
console.log(d);

//Task 12 — Pre Increment

let e = 10;

let f = ++a;

console.log(e);
console.log(f);

//Task 13 — Post Decrement

let g = 20;

let h = a--;

console.log(g);
console.log(h);

//Task 14 — Pre Decrement

let i = 20;

let j = --a;

console.log(i);
console.log(j);

//Task 15 — Find the Final Values

{
    let a = 5;

let b = a++;

let c = ++a;

let d = b--;
}

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//Task 16 — Assignment Operators

let num = 10;

num += 5;
console.log("After += :", num);



//Task 17 — Mini Student Profile
{

let name = "Kathirvel";
let age = 24;
let city = "Chennai";
let college = "Jeppiaar Istitute Of Technology";
}

let subjects = [
    "Tamil",
    "English",
    "Maths",
    "Science",
    "Computer"
];
{
let student = {
    name: name,
    age: age,
    city: city,
    subjects: subjects,
    isStudent: true
}

};

// 1. Student name
console.log("Student Name:", name);

// 2. Student age
console.log("Student Age:", age);

// 3. City
console.log("City:", city);

// 4. First subject
console.log("First Subject:", subjects[0]);

// 5. Last subject
console.log("Last Subject:", subjects[subjects.length - 1]);

// 6. Total subjects
console.log("Total Subjects:", subjects.length);

// 7. Complete object
console.log("Complete Object:", student);


//Final Challenge — User + Calculator

let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

num1 = Number(num1);
num2 = Number(num2);

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Power:", num1 ** num2);