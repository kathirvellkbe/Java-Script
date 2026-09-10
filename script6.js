
//Task 1 — Student Result Analyzer

function studentResult(name, department, mark1, mark2, mark3, mark4, mark5) {

    let total = mark1 + mark2 + mark3 + mark4 + mark5;
    let average = total / 5;

    let result;
    let grade;

    if (mark1 >= 50 && mark2 >= 50 && mark3 >= 50 && mark4 >= 50 && mark5 >= 50) {
        result = "Pass";

        if (average >= 90) {
            grade = "A";
        } else if (average >= 75) {
            grade = "B";
        } else if (average >= 60) {
            grade = "C";
        } else if (average >= 50) {
            grade = "D";
        }
    } else {
        result = "Fail";
        grade = "Fail";
    }

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}

studentResult("Kathirvel", "Computer Science", 85, 90, 78, 88, 92);


//Task 2 — Employee Salary Calculator

let employee = {
    name: "Kathirvel",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 0.15;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);


//Task 3 — Product Filter System


let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

// 1. Products above ₹2,000
let above2000 = products.filter(product => product.price > 2000);
console.log("Products above ₹2000:", above2000);

// 2. Electronics products
let electronics = products.filter(product => product.category === "electronics");
console.log("Electronics:", electronics);

// 3. First product below ₹1,000
let below1000 = products.find(product => product.price < 1000);
console.log("First product below ₹1000:", below1000);

// 4. Total price
let totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Total Price:", totalPrice);

// 5. Any product above ₹50,000
let moreThan50000 = products.some(product => product.price > 50000);
console.log("Any product above ₹50000:", moreThan50000);

// 6. Every product above ₹500
let everyAbove500 = products.every(product => product.price > 500);
console.log("Every product above ₹500:", everyAbove500);



//Task 4 — Employee Management


let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "Priya",
        role: "HR Manager",
        salary: 45000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "UI Designer",
        salary: 35000
    },
    {
        id: 105,
        name: "Karthi",
        role: "Software Engineer",
        salary: 60000
    },
    {
        id: 106,
        name: "Meena",
        role: "Project Manager",
        salary: 70000
    }
];

// 1. Display all employee names
let names = employees.map(employee => employee.name);
console.log("Employee Names:", names);

// 2. Employees earning above ₹40,000
let above40000 = employees.filter(employee => employee.salary > 40000);
console.log("Employees above ₹40000:", above40000);

// 3. Find employee with ID 103
let employee103 = employees.find(employee => employee.id === 103);
console.log("Employee ID 103:", employee103);

// 4. Calculate total salary
let totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);
console.log("Total Salary:", totalSalary);

// 5. Find highest-paid employee
let highestPaid = employees.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee : highest;
});

console.log("Highest Paid Employee:", highestPaid);

// 6. Sort highest salary to lowest
let sortedEmployees = [...employees].sort(
    (a, b) => b.salary - a.salary
);

console.log("Salary High to Low:", sortedEmployees);

// 7. New array containing only names
let employeeNames = employees.map(employee => employee.name);
console.log("Names Only:", employeeNames);



//Task 5 — Shopping Cart


let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    let totalCartValue = cart.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 0.10;
    }

    let finalAmount = totalCartValue - discount;

    console.log("Total Cart Value:", totalCartValue);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalAmount);
}

calculateCart(cart);



//Task 6 — Student Search System


let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

// 1. Display all student names
let studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);

// 2. Students who scored above 80
let above80 = students.filter(student => student.mark > 80);
console.log("Above 80:", above80);

// 3. Find Priya
let priya = students.find(student => student.name === "Priya");
console.log("Priya:", priya);

// 4. Calculate average mark
let totalMarks = students.reduce(
    (total, student) => total + student.mark,
    0
);

let averageMark = totalMarks / students.length;

console.log("Average Mark:", averageMark);

// 5. Check whether anyone failed
let anyoneFailed = students.some(student => student.mark < 50);
console.log("Anyone Failed:", anyoneFailed);

// 6. Check whether everyone scored above 40
let everyoneAbove40 = students.every(student => student.mark > 40);
console.log("Everyone above 40:", everyoneAbove40);

// 7. Sort students by marks
let sortedStudents = [...students].sort(
    (a, b) => b.mark - a.mark
);

console.log("Students Sorted by Marks:", sortedStudents);



//Task 7 — Array Transformation Challenge


let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// 1. Numbers × 2
let doubled = numbers.map(number => number * 2);
console.log("Doubled:", doubled);

// 2. Even numbers
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 3. Numbers greater than 15
let greaterThan15 = numbers.filter(number => number > 15);
console.log("Greater than 15:", greaterThan15);

// 4. First number greater than 20
let firstGreater20 = numbers.find(number => number > 20);
console.log("First number greater than 20:", firstGreater20);

// 5. Total
let total = numbers.reduce((sum, number) => sum + number, 0);
console.log("Total:", total);

// 6. Any number greater than 40
let anyGreater40 = numbers.some(number => number > 40);
console.log("Any greater than 40:", anyGreater40);

// 7. Every number positive
let allPositive = numbers.every(number => number > 0);
console.log("Every number positive:", allPositive);

// 8. Highest to lowest
let descending = [...numbers].sort((a, b) => b - a);
console.log("Highest to Lowest:", descending);




//Task 8 — String Analyzer


let sentence = prompt("Enter a sentence:");

console.log("Original Sentence:", sentence);

// 1. Total characters
console.log("Total Characters:", sentence.length);

// 2. Uppercase
console.log("Uppercase:", sentence.toUpperCase());

// 3. Lowercase
console.log("Lowercase:", sentence.toLowerCase());

// 4. Contains JavaScript
console.log(
    "Contains JavaScript:",
    sentence.includes("JavaScript")
);

// 5. First character
console.log("First Character:", sentence[0]);

// 6. Last character
console.log(
    "Last Character:",
    sentence[sentence.length - 1]
);

// 7. Number of words
let words = sentence.trim().split(/\s+/);
console.log("Number of Words:", words.length);

// 8. Replace JavaScript with Python
console.log(
    "After Replace:",
    sentence.replace("JavaScript", "Python")
);

// 9. Convert sentence into array
console.log("Sentence Array:", sentence.split(" "));





//Final Mini Project — Employee Dashboard

{
let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];
}


// 1. Employee List
console.log("----- EMPLOYEE LIST -----");

employees.forEach(employee => {
    console.log(
        employee.id,
        employee.name,
        employee.department,
        employee.salary,
        employee.experience
    );
});


// 2. Search employee by name
let searchName = "Arun";

let searchedEmployee = employees.find(
    employee => employee.name === searchName
);

console.log("----- SEARCH -----");
console.log(searchedEmployee);


// 3. Department Filter
let department = "IT";

let departmentEmployees = employees.filter(
    employee => employee.department === department
);

console.log("----- IT EMPLOYEES -----");
console.log(departmentEmployees);


// 4. Salary Filter
let highSalaryEmployees = employees.filter(
    employee => employee.salary > 50000
);

console.log("----- SALARY ABOVE ₹50000 -----");
console.log(highSalaryEmployees);


// 5. Total Company Salary
let totalCompanySalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("----- TOTAL SALARY -----");
console.log("Total Salary:", totalCompanySalary);


// 6. Highest Salary
let highestSalary = employees.reduce(
    (highest, employee) => {
        return employee.salary > highest.salary
            ? employee
            : highest;
    }
);

console.log("----- HIGHEST SALARY -----");
console.log(highestSalary);


// 7. Employees with more than 3 years experience
let experiencedEmployees = employees.filter(
    employee => employee.experience > 3
);

console.log("----- EXPERIENCE ABOVE 3 YEARS -----");
console.log(experiencedEmployees);


// 8. Sort Low → High
let lowToHigh = [...employees].sort(
    (a, b) => a.salary - b.salary
);

console.log("----- SALARY LOW TO HIGH -----");
console.log(lowToHigh);


// Sort High → Low
let highToLow = [...employees].sort(
    (a, b) => b.salary - a.salary
);

console.log("----- SALARY HIGH TO LOW -----");
console.log(highToLow);


// 9. Statistics
let averageSalary = totalCompanySalary / employees.length;

console.log("----- STATISTICS -----");
console.log("Total Employees:", employees.length);
console.log("Total Salary: ₹" + totalCompanySalary);
console.log("Highest Salary: ₹" + highestSalary.salary);
console.log("Average Salary: ₹" + Math.round(averageSalary));


