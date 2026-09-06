
//Task 1 — For Loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//Task 2 — Reverse Number

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


//Task 3 — Even Numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//Task 4 — Odd Numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


//Task 5 — Multiplication Table

let number = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


//Task 6 — While Loop Countdown

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}


//Task 7 — Sum of Numbers

{
let i = 1;
let sum = 0;

while (i <= 10) {
    sum = sum + i;
    i++;
}

console.log(sum);
}


//Task 8 — Do While

{
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
}


//Task 9 — Do While Understanding

let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);


//Task 10 — String Characters

let name = "javascript";

for (let character of name) {
    console.log(character);
}


//Task 11 — Array Values


let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}


//Task 12 — Student Names



let students = ["Kathirvel", "Priya", "Sasi", "Divya", "Shibin"];

for (let student of students) {
    console.log("Student: " + student);
}


//Task 13 — Employee Object

let employee = {
    name: "kathirvel",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key + " " + employee[key]);
}

//Task 14 — Product Object


let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key + " " + product[key]);
}


//Task 15 — Simple Function

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();


//Task 16 — Function With Parameter

function greet(name) {
    console.log("Hello " + name);
}

greet("Kathirvel");
greet("Sasi");
greet("Priya");


//Task 17 — Multiple Parameters


function student(name, age, department) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);
}

student("Arun", 20, "IT");
student("Priya", 21, "HR");
student("Kathirvel", 24, "CSE");


//Task 18 — Addition Function

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);


//Task 19 — Salary

{
function salary(amount) {
    return amount;
}

let result = salary(50000);

console.log(result);
}


//Task 20 — Bonus Calculator

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let total = bonus(50000, 5000);

console.log(total);


//Task 21 — Default Parameter
{
function employee(name, role = "Developer") {
    console.log("Name: " + name);
    console.log("Role: " + role);
}

employee("Kathirvel");
employee("Priya", "Designer");
}


//Task 22 — Named Function

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(6));


//Task 23 — Anonymous Function

let calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 20));


//Task 24 — Arrow Function


let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(10, 5));


// Task 25 - Scope

function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
}

test();

// Task 26 - Hoisting

function task26() {

    console.log(a);

    var a = 10;

}

task26();


//Task 27 — Hoisting with let

 //console.log(b);

 //let b = 20;

//Task 28 — Hoisting with const

//console.log(c);

//const c = 30;

//Task 29 — IIFE

(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);


//Task 30 — Callback / Higher-Order Function

function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);

//Task 31 — Generator Function
{
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let result = cashback();

for (let value of result) {
    console.log(value);
}}



//Task 32 — Employee Management Console


// Employee data

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Kumar",
        age: 26,
        department: "IT",
        role: "Tester",
        salary: 45000
    }
];


// 1. for...of
// Print every employee

console.log("----- Employee List -----");

for (let employee of employees) {
    console.log(employee);
}


// 2. for...in
// Print each employee's keys and values

console.log("----- Employee Details -----");

for (let employee of employees) {

    for (let key in employee) {
        console.log(key + ": " + employee[key]);
    }

    console.log("----------------");
}


// 3. Function
// Display employee information

function displayEmployee(name, age, department, role, salary) {

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);
    console.log("Role: " + role);
    console.log("Salary: " + salary);
}


// 4. Function parameters
// Pass employee information to function

console.log("----- Display Using Function -----");

for (let employee of employees) {

    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );

    console.log("----------------");
}


// 5. Return
// Function that returns salary

function getSalary(employee) {
    return employee.salary;
}


// 6. Condition
// Check salary >= 40000

console.log("----- Salary Check -----");

for (let employee of employees) {

    let salary = getSalary(employee);

    if (salary >= 40000) {
        console.log(employee.name + " has salary >= 40000");
    } else {
        console.log(employee.name + " has salary < 40000");
    }
}


// 7. Arrow Function
// Simple calculation

let calculateBonus = (salary, bonus) => {
    return salary + bonus;
};

console.log("----- Bonus Calculation -----");

console.log(calculateBonus(40000, 5000));


// 8. Generator
// Employee benefits

function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

console.log("----- Employee Benefits -----");

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log(benefit);
}