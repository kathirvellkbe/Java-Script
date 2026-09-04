//Task 1 — Variables

var name = "Kathirvel";
let age = 24;
const city = "Chennai";
const college = "Jeppiaar Collage";

console.log(name);
console.log(age);
console.log(city);
console.log(college);

// Change var
name = "Vetri";
console.log(name);

// Change let
age = 26;
console.log(age);

// Try changing const
// city = "Madurai"; // TypeError: Assignment to constant variable

// Redeclare var
var name = "Arun";
console.log(name);


//Task 2 — Printing Statements
{
console.log("Hello JavaScript");

alert("Welcome to JavaScript");

confirm("Are you sure?");

let name = prompt("Enter your name");
console.log(name);

document.writeln("Hello from document.writeln()");
}

//Task 3 — User Details
{
let name = prompt("Enter your name");
let age = prompt("Enter your age");
let city = prompt("Enter your city");
let qualification = prompt("Enter your qualification");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Qualification:", qualification);}

//Task 4 — Find Data Types

let a = "JavaScript";
let b = 100;
let c = 99.5;
let d = true;
let e = false;
let f = undefined;
let g = null;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);

//Task 5 — Student Array
{
let students = ["Kathirvel", "Priya", "Sasi", "Shibin", "Samantha"];

console.log("First student:", students[0]);

console.log("Second student:", students[1]);

console.log("Last student:", students[students.length - 1]);

console.log("Total students:", students.length);
}

//Task 6 — Employee Object

let employee = {
    name: "Kathirvel",
    age: 28,
    role: "Developer",
    skills: ["JavaScript", "HTML", "CSS"],
    isWorking: true,
    qualification: ["B.E", "M.E"]
};

console.log("Employee name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);

console.log("First skill:", employee.skills[0]);

console.log(
    "Last qualification:",
    employee.qualification[employee.qualification.length - 1]
);

console.log("Working status:", employee.isWorking);

//Task 7 — Calculator

{ let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);
}

//Task 8 — Shopping Bill
{
let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let total = shirt + pant + shoes + bag;

console.log("Total price:", total);
}

//Task 9 — Increment & Decrement

//A
{
let a = 10;

let b = a++;

console.log(a);
console.log(b);
}

//B
{
let a = 10;

let b = ++a;

console.log(a);
console.log(b);
}

//C
{let a = 10;

let b = a--;

console.log(a);
console.log(b);

}

//D

{
let a = 10;

let b = --a;

console.log(a);
console.log(b);

}

//Task 10 — Assignment Operators

{
let num = 10;

num += 5;
console.log("After += 5:", num);

num = 10;
num -= 3;
console.log("After -= 3:", num);

num = 10;
num *= 2;
console.log("After *= 2:", num);

num = 10;
num /= 4;
console.log("After /= 4:", num);

num = 10;
num %= 3;
console.log("After %= 3:", num);

num = 10;
num **= 2;
console.log("After **= 2:", num);}

//Task 11 — Comparison Operators

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");

//Task 12 — AND &&

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


//Task 13 — OR ||


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//Task 14 — NOT !
console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));


//Task 15 — Combination


console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");


//Task 16 — Voting
{
let age = 20;

let result = age >= 18
    ? "Eligible to vote"
    : "Not eligible";

console.log(result);
}

//Task 17 — Password


let password = true;

let result = password
    ? "Login successful"
    : "Wrong password";

console.log(result);


//Task 18 — User Introduction
{
let name = "Kathirvel";
let age = 24;
let city = "Chennai";

console.log(
    "My name is " + name +
    ". I am " + age +
    " years old. I live in " + city + "."
);
}

//Task 19 — String Conversion
{
let a = String(100);
let b = String(true);
let c = String(undefined);
let d = String(null);
let e = String([1, 2]);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
}

//Task 20 — Number Conversion

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

//Task 21 — Boolean Conversion

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));

//Task 22 — Voting Eligibility
{
let age = Number(prompt("Enter your age"));

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}
}


//Task 23 — Positive or Negative

let number = Number(prompt("Enter a number"));

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Task 24 — Grade System

let marks = Number(prompt("Enter your marks"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80) {
    console.log("B Grade");
} else if (marks >= 70) {
    console.log("C Grade");
} else if (marks >= 60) {
    console.log("D Grade");
} else if (marks >= 0) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}

//Task 25 — Job Eligibility
{
let age = Number(prompt("Enter your age"));
let height = Number(prompt("Enter your height"));
let weight = Number(prompt("Enter your weight"));

if (age >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("You are not selected because your weight is below 60");
        }

    } else {
        console.log("You are not selected because your height is below 160");
    }

} else {
    console.log("You are not selected because your age is below 18");
}
}

//Task 26 — Traffic Light

let color = prompt("Enter traffic light color");

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}


//Task 27 — Day

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


//Task 28 — Student Result System


// Step 1 - Get user details
{
let name = prompt("Enter your name");
let age = Number(prompt("Enter your age"));
let city = prompt("Enter your city");

// Step 2 - Get marks

let tamil = Number(prompt("Enter Tamil marks"));
let english = Number(prompt("Enter English marks"));
let maths = Number(prompt("Enter Maths marks"));

// Step 3 - Calculate total and average

let total = tamil + english + maths;
let average = total / 3;

// Step 4 - Check grade

let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

// Step 5 - Check voting eligibility

let voting;

if (age >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}

// Step 6 - Display result

console.log(`
Name: ${name}
Age: ${age}
City: ${city}
Tamil: ${tamil}
English: ${english}
Maths: ${maths}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);
}

//