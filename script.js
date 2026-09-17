// =====================================================
// EMPLOYEE MANAGEMENT SYSTEM
// =====================================================


// API URL
const API_URL = "https://dummyjson.com/users";


// Main employee array
let employees = [];


// Current department
let selectedDepartment = "All";


// Current search text
let searchText = "";


// =====================================================
// DOM ELEMENTS
// =====================================================

const employeeContainer =
    document.getElementById("employeeContainer");

const employeeCount =
    document.getElementById("employeeCount");

const totalSalary =
    document.getElementById("totalSalary");

const averageSalary =
    document.getElementById("averageSalary");

const highestPaid =
    document.getElementById("highestPaid");

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const employeeForm =
    document.getElementById("employeeForm");

const statusMessage =
    document.getElementById("statusMessage");

const sortSelect =
    document.getElementById("sortSelect");


// =====================================================
// FETCH EMPLOYEES
// =====================================================

function fetchEmployees() {

    statusMessage.innerHTML = "Loading employees...";


    fetch(API_URL)

        .then(response => {

            if (!response.ok) {
                throw new Error("API request failed");
            }

            return response.json();
        })


        .then(data => {

            console.log("API data:", data);


            // Store users in array

            employees = data.users.map(user => {

                // Destructuring

                const {
                    id,
                    firstName,
                    lastName,
                    age,
                    email,
                    phone,
                    image,
                    company
                } = user;


                // Convert API department

                let department =
                    getDepartment(company.department);


                // Create employee object

                return {

                    id: id,

                    name: `${firstName} ${lastName}`,

                    age: age,

                    email: email,

                    phone: phone,

                    image: image,

                    department: department,


                    // Salary added locally
                    // Different salary for each employee

                    salary:
                        Math.floor(
                            Math.random() * 70001
                        ) + 30000

                };

            });


            displayEmployees(employees);


            statusMessage.innerHTML =
                "Employee data loaded successfully.";

        })


        .catch(error => {

            console.error(error);

            statusMessage.innerHTML =
                "Unable to load employee data. Please try again.";

        })


        .finally(() => {

            console.log(
                "API request completed."
            );

        });

}


// =====================================================
// DEPARTMENT CONVERTER
// =====================================================

function getDepartment(apiDepartment) {

    const department =
        apiDepartment.toLowerCase();


    if (department.includes("marketing")) {

        return "Marketing";

    }


    if (
        department.includes("human") ||
        department.includes("hr")
    ) {

        return "HR";

    }


    if (
        department.includes("finance") ||
        department.includes("account")
    ) {

        return "Finance";

    }


    if (
        department.includes("engineering") ||
        department.includes("development") ||
        department.includes("technology")
    ) {

        return "IT";

    }


    return "IT";
}


// =====================================================
// DISPLAY EMPLOYEES
// =====================================================

function displayEmployees(employeeList) {

    employeeContainer.innerHTML = "";


    employeeList.forEach(employee => {

        createEmployeeCard(employee);

    });


    updateEmployeeCount(employeeList);

    calculateSalary(employeeList);

}


// =====================================================
// CREATE EMPLOYEE CARD
// =====================================================

function createEmployeeCard(employee) {

    const card =
        document.createElement("div");


    card.className =
        "employee-card";


    // setAttribute()

    card.setAttribute(
        "data-id",
        employee.id
    );


    // Salary display

    const salaryText =
        `₹${employee.salary.toLocaleString("en-IN")}`;


    card.innerHTML = `

        <img
            src="${employee.image || "https://via.placeholder.com/100"}"
            alt="${employee.name}"
        >

        <h3>${employee.name}</h3>

        <p>
            <strong>Age:</strong>
            ${employee.age}
        </p>

        <p>
            <strong>Email:</strong>
            ${employee.email}
        </p>

        <p>
            <strong>Phone:</strong>
            ${employee.phone || "Not Available"}
        </p>

        <p class="department">
            <strong>Department:</strong>
            ${employee.department}
        </p>

        <p>
            <strong>Salary:</strong>
            ${salaryText}
        </p>

        <button
            class="delete-btn"
            onclick="deleteEmployee(${employee.id})"
        >
            Delete
        </button>

    `;


    employeeContainer.appendChild(card);

}


// =====================================================
// SEARCH EMPLOYEES
// =====================================================

function searchEmployees() {

    searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    applyFilters();

}


// =====================================================
// APPLY SEARCH + DEPARTMENT FILTER
// =====================================================

function applyFilters() {

    let filteredEmployees =
        employees.filter(employee => {

            const matchesName =
                employee.name
                    .toLowerCase()
                    .includes(searchText);


            const matchesDepartment =
                selectedDepartment === "All" ||
                employee.department === selectedDepartment;


            return matchesName &&
                   matchesDepartment;

        });


    displayEmployees(filteredEmployees);

}


// =====================================================
// DEPARTMENT FILTER
// =====================================================

function filterDepartment(department) {

    selectedDepartment =
        department;


    document
        .querySelectorAll(".department-btn")
        .forEach(button => {

            button.classList.remove("active");

        });


    const selectedButton =
        document.querySelector(
            `[data-department="${department}"]`
        );


    if (selectedButton) {

        selectedButton.classList.add("active");

    }


    applyFilters();

}


// =====================================================
// UPDATE EMPLOYEE COUNT
// =====================================================

function updateEmployeeCount(employeeList) {

    employeeCount.innerHTML =
        employeeList.length;

}


// =====================================================
// CALCULATE SALARY
// =====================================================

function calculateSalary(employeeList) {


    // ==========================================
    // TOTAL SALARY
    // ==========================================

    const total =
        employeeList.reduce(
            (sum, employee) => {

                return sum + employee.salary;

            },
            0
        );


    totalSalary.innerHTML =
        `₹${total.toLocaleString("en-IN")}`;


    // ==========================================
    // AVERAGE SALARY
    // ==========================================

    const average =
        employeeList.length > 0
            ? total / employeeList.length
            : 0;


    averageSalary.innerHTML =
        `₹${Math.round(average).toLocaleString("en-IN")}`;


    // ==========================================
    // HIGHEST PAID EMPLOYEE
    // ==========================================

    if (employeeList.length === 0) {

        highestPaid.innerHTML =
            "None";

        return;

    }


    const highest =
        employeeList.reduce(
            (highestEmployee, employee) => {

                return employee.salary >
                    highestEmployee.salary
                    ? employee
                    : highestEmployee;

            }
        );


    highestPaid.innerHTML =
        `${highest.name} - ₹${highest.salary.toLocaleString("en-IN")}`;

}


// =====================================================
// VALIDATE EMPLOYEE
// =====================================================

function validateEmployee() {

    let isValid = true;


    const name =
        document.getElementById("name")
            .value
            .trim();


    const age =
        Number(
            document.getElementById("age")
                .value
        );


    const email =
        document.getElementById("email")
            .value
            .trim();


    const department =
        document.getElementById("department")
            .value;


    // Clear old errors

    document.getElementById("nameError")
        .innerHTML = "";

    document.getElementById("ageError")
        .innerHTML = "";

    document.getElementById("emailError")
        .innerHTML = "";

    document.getElementById("departmentError")
        .innerHTML = "";


    // Name validation

    if (name === "") {

        document.getElementById("nameError")
            .innerHTML =
            "❌ Please enter employee name";

        isValid = false;

    }


    // Age validation

    if (age <= 18 || isNaN(age)) {

        document.getElementById("ageError")
            .innerHTML =
            "❌ Age must be greater than 18";

        isValid = false;

    }


    // Email validation

    if (email === "") {

        document.getElementById("emailError")
            .innerHTML =
            "❌ Please enter employee email";

        isValid = false;

    }


    // Department validation

    if (department === "") {

        document.getElementById("departmentError")
            .innerHTML =
            "❌ Please select department";

        isValid = false;

    }


    return isValid;

}


// =====================================================
// ADD EMPLOYEE
// =====================================================

function addEmployee(event) {

    event.preventDefault();


    // Validate

    if (!validateEmployee()) {

        return;

    }


    const name =
        document.getElementById("name")
            .value
            .trim();


    const age =
        Number(
            document.getElementById("age")
                .value
        );


    const email =
        document.getElementById("email")
            .value
            .trim();


    const department =
        document.getElementById("department")

            .value;

    // Create employee object

    const newEmployee = {

        id: Date.now(),

        name: name,

        age: age,

        email: email,

        department: department,

        phone: "Not Available",

        image: "https://via.placeholder.com/100",


        // Salary for newly added employee

        salary: 50000

    };


    // Spread operator

    employees = [

        ...employees,

        newEmployee

    ];


    console.log(
        "New employee:",
        newEmployee
    );


    // Display updated employees

    applyFilters();


    // Clear form

    clearForm();


    statusMessage.innerHTML =
        "Employee added successfully.";

}


// =====================================================
// DELETE EMPLOYEE
// =====================================================

function deleteEmployee(id) {

    const employee =
        employees.find(
            employee => employee.id === id
        );


    if (!employee) {

        return;

    }


    const confirmDelete =
        confirm(
            `Delete ${employee.name}?`
        );


    if (!confirmDelete) {

        return;

    }


    employees =
        employees.filter(
            employee => employee.id !== id
        );


    applyFilters();


    statusMessage.innerHTML =
        "Employee deleted successfully.";

}


// =====================================================
// CLEAR FORM
// =====================================================

function clearForm() {

    employeeForm.reset();


    document.getElementById("nameError")
        .innerHTML = "";

    document.getElementById("ageError")
        .innerHTML = "";

    document.getElementById("emailError")
        .innerHTML = "";

    document.getElementById("departmentError")
        .innerHTML = "";

}


// =====================================================
// SORT EMPLOYEES
// =====================================================

function sortEmployees() {

    const sortType =
        sortSelect.value;


    let sortedEmployees =
        [...employees];


    if (sortType === "nameAsc") {

        sortedEmployees.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    else if (sortType === "nameDesc") {

        sortedEmployees.sort(
            (a, b) =>
                b.name.localeCompare(a.name)
        );

    }


    else if (sortType === "ageAsc") {

        sortedEmployees.sort(
            (a, b) =>
                a.age - b.age
        );

    }


    else if (sortType === "ageDesc") {

        sortedEmployees.sort(
            (a, b) =>
                b.age - a.age
        );

    }


    else if (sortType === "salaryAsc") {

        sortedEmployees.sort(
            (a, b) =>
                a.salary - b.salary
        );

    }


    else if (sortType === "salaryDesc") {

        sortedEmployees.sort(
            (a, b) =>
                b.salary - a.salary
        );

    }


    const filtered =
        sortedEmployees.filter(employee => {

            const matchesName =
                employee.name
                    .toLowerCase()
                    .includes(searchText);


            const matchesDepartment =
                selectedDepartment === "All" ||
                employee.department === selectedDepartment;


            return matchesName &&
                   matchesDepartment;

        });


    displayEmployees(filtered);

}


// =====================================================
// DATE & TIME
// =====================================================

function updateDateTime() {

    const now =
        new Date();


    const day =
        now.getDate();


    const month =
        now.toLocaleString(
            "en-IN",
            {
                month: "long"
            }
        );


    const year =
        now.getFullYear();


    let hours =
        now.getHours();


    const minutes =
        now.getMinutes()
            .toString()
            .padStart(2, "0");


    const seconds =
        now.getSeconds()
            .toString()
            .padStart(2, "0");


    const ampm =
        hours >= 12
            ? "PM"
            : "AM";


    hours =
        hours % 12 || 12;


    const formattedDate =
        `Today: ${day} ${month} ${year}`;


    const formattedTime =
        `Time: ${hours}:${minutes}:${seconds} ${ampm}`;


    document.getElementById("today")
        .innerHTML =
        formattedDate;


    document.getElementById("currentTime")
        .innerHTML =
        formattedTime;

}


// =====================================================
// EVENT LISTENERS
// =====================================================


// Search button

searchBtn.addEventListener(
    "click",
    searchEmployees
);


// Search while typing

searchInput.addEventListener(
    "input",
    searchEmployees
);


// Add employee form

employeeForm.addEventListener(
    "submit",
    addEmployee
);


// Sort employees

sortSelect.addEventListener(
    "change",
    sortEmployees
);


// Department buttons

document
    .querySelectorAll(".department-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const department =
                    button.getAttribute(
                        "data-department"
                    );


                filterDepartment(
                    department
                );

            }
        );

    });


// =====================================================
// SOME() AND EVERY()
// =====================================================

function checkEmployeeData() {


    // some()

    const hasYoungEmployee =
        employees.some(
            employee =>
                employee.age < 18
        );


    console.log(
        "Is there an employee below 18?",
        hasYoungEmployee
    );


    // every()

    const allValidEmployees =
        employees.every(
            employee =>
                employee.name !== "" &&
                employee.age > 0
        );


    console.log(
        "Is employee data valid?",
        allValidEmployees
    );

}


// =====================================================
// SET TIMEOUT
// =====================================================

setTimeout(() => {

    console.log(
        "Employee dashboard is ready."
    );

}, 1000);


// =====================================================
// START APPLICATION
// =====================================================

updateDateTime();


// Update clock every second

setInterval(
    updateDateTime,
    1000
);


// Fetch employees from API

fetchEmployees();