
// =========================================
// EMPLOYEE ARRAY
// =========================================

let employees = [];

let displayedEmployees = [];

let selectedDepartment = "All";


// =========================================
// DATE AND TIME
// =========================================

function updateDateTime() {

    const now = new Date();

    const day = now.getDate();

    const month = now.toLocaleString("en-IN", {
        month: "long"
    });

    const year = now.getFullYear();

    let hours = now.getHours();

    const minutes = String(
        now.getMinutes()
    ).padStart(2, "0");

    const seconds = String(
        now.getSeconds()
    ).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    document.getElementById("date").textContent =
        `Today: ${day} ${month} ${year}`;

    document.getElementById("time").textContent =
        `Time: ${hours}:${minutes}:${seconds} ${ampm}`;
}

updateDateTime();

setInterval(updateDateTime, 1000);


// =========================================
// FETCH EMPLOYEES FROM API
// =========================================

function fetchEmployees() {

    showMessage("Loading employees...");

    fetch("https://dummyjson.com/users")

        .then(response => {

            if (!response.ok) {
                throw new Error("API Error");
            }

            return response.json();
        })

        .then(data => {

            const apiEmployees = data.users.map(
                (user, index) => {

                    return {

                        id: user.id,

                        name:
                            `${user.firstName} ${user.lastName}`,

                        age:
                            user.age,

                        email:
                            user.email,

                        phone:
                            user.phone,

                        image:
                            user.image,

                        // IT, HR, Finance, Marketing
                        department:
                            getDepartment(index),

                        // Salary
                        salary:
                            getSalary(index)
                    };
                }
            );

            employees = apiEmployees;

            displayedEmployees = [...employees];

            displayEmployees(displayedEmployees);

            showMessage(
                "Employee data loaded successfully."
            );
        })

        .catch(error => {

            console.log(error);

            showMessage(
                "Unable to load employee data. Please try again."
            );
        })

        .finally(() => {

            console.log(
                "API loading completed."
            );
        });
}


// =========================================
// DEPARTMENT ASSIGNMENT
// =========================================

function getDepartment(index) {

    const departments = [
        "IT",
        "HR",
        "Finance",
        "Marketing"
    ];

    return departments[
        index % departments.length
    ];
}


// =========================================
// SALARY ASSIGNMENT
// =========================================

function getSalary(index) {

    const salaries = [
        45000,
        50000,
        55000,
        60000,
        65000,
        70000,
        75000,
        80000,
        85000,
        90000
    ];

    return salaries[
        index % salaries.length
    ];
}


// =========================================
// DISPLAY EMPLOYEES
// =========================================

function displayEmployees(employeeList) {

    const container =
        document.getElementById(
            "employeeContainer"
        );

    container.innerHTML = "";

    displayedEmployees = employeeList;

    if (employeeList.length === 0) {

        const empty =
            document.createElement("div");

        empty.className = "empty";

        empty.innerHTML =
            "<h3>No employees found</h3>";

        container.appendChild(empty);

        updateDashboard([]);

        return;
    }

    employeeList.forEach(employee => {

        const card =
            document.createElement("div");

        card.className =
            "employee-card";

        // IMAGE
        const image =
            document.createElement("img");

        image.setAttribute(
            "src",
            employee.image ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name)}`
        );

        image.setAttribute(
            "alt",
            employee.name
        );

        // NAME
        const name =
            document.createElement("h3");

        name.textContent =
            employee.name;

        // DETAILS
        const details =
            document.createElement("div");

        details.innerHTML = `

            <p>
                <strong>Age:</strong>
                ${employee.age}
            </p>

            <p>
                <strong>Email:</strong>
                ${employee.email}
            </p>

            <p>
                <strong>Department:</strong>
                ${employee.department}
            </p>

            <p>
                <strong>Phone:</strong>
                ${employee.phone}
            </p>

            <p>
                <strong>Salary:</strong>
                ₹${Number(employee.salary).toLocaleString("en-IN")}
            </p>

        `;

        // DELETE BUTTON
        const deleteButton =
            document.createElement("button");

        deleteButton.textContent =
            "Delete";

        deleteButton.className =
            "delete-btn";

        deleteButton.addEventListener(
            "click",
            function() {

                deleteEmployee(
                    employee.id
                );
            }
        );

        card.appendChild(image);

        card.appendChild(name);

        card.appendChild(details);

        card.appendChild(deleteButton);

        container.appendChild(card);
    });

    updateDashboard(employeeList);
}


// =========================================
// SEARCH EMPLOYEES
// =========================================

function searchEmployees() {

    const searchText =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    let result =
        employees.filter(employee =>
            employee.name
                .toLowerCase()
                .includes(searchText)
        );

    if (selectedDepartment !== "All") {

        result =
            result.filter(employee =>
                employee.department
                    .toLowerCase()
                    ===
                selectedDepartment.toLowerCase()
            );
    }

    displayEmployees(result);
}


// SEARCH BUTTON

document
    .getElementById("searchBtn")
    .addEventListener(
        "click",
        searchEmployees
    );


// LIVE SEARCH

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        searchEmployees
    );


// =========================================
// DEPARTMENT FILTER
// =========================================

function filterDepartment(department) {

    selectedDepartment =
        department;

    const searchText =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    let result =
        employees.filter(employee => {

            const departmentMatch =
                department === "All" ||
                employee.department
                    .toLowerCase()
                    ===
                department.toLowerCase();

            const searchMatch =
                employee.name
                    .toLowerCase()
                    .includes(searchText);

            return (
                departmentMatch &&
                searchMatch
            );
        });

    displayEmployees(result);
}


// =========================================
// ADD EMPLOYEE
// =========================================

document
    .getElementById("employeeForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            addEmployee();
        }
    );


function addEmployee() {

    const name =
        document
            .getElementById("name")
            .value
            .trim();

    const age =
        Number(
            document
                .getElementById("age")
                .value
        );

    const email =
        document
            .getElementById("email")
            .value
            .trim();

    const department =
        document
            .getElementById("department")
            .value;

    const salary =
        Number(
            document
                .getElementById("salary")
                .value
        );


    // VALIDATION

    const validation =
        validateEmployee(
            name,
            age,
            email,
            department,
            salary
        );

    if (!validation.valid) {

        document
            .getElementById("errorMessage")
            .textContent =
                validation.message;

        return;
    }


    // CREATE NEW EMPLOYEE

    const newEmployee = {

        id:
            Date.now(),

        name:
            name,

        age:
            age,

        email:
            email,

        department:
            department,

        phone:
            "Not available",

        salary:
            salary,

        image:
            `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`
    };


    // ADD EMPLOYEE USING SPREAD

    employees = [
        ...employees,
        newEmployee
    ];


    selectedDepartment =
        "All";


    document
        .getElementById("searchInput")
        .value = "";


    // DISPLAY

    displayEmployees(
        employees
    );


    // CLEAR FORM

    clearForm();


    document
        .getElementById("errorMessage")
        .textContent = "";


    showMessage(
        "Employee added successfully."
    );
}


// =========================================
// VALIDATION
// =========================================

function validateEmployee(
    name,
    age,
    email,
    department,
    salary
) {

    if (name === "") {

        return {
            valid: false,
            message:
                "❌ Please enter employee name"
        };
    }


    if (age <= 18 || isNaN(age)) {

        return {
            valid: false,
            message:
                "❌ Age must be greater than 18"
        };
    }


    if (email === "") {

        return {
            valid: false,
            message:
                "❌ Please enter employee email"
        };
    }


    if (!email.includes("@")) {

        return {
            valid: false,
            message:
                "❌ Please enter a valid email"
        };
    }


    if (department === "") {

        return {
            valid: false,
            message:
                "❌ Please select a department"
        };
    }


    if (salary <= 0 || isNaN(salary)) {

        return {
            valid: false,
            message:
                "❌ Please enter a valid salary"
        };
    }


    return {
        valid: true,
        message: ""
    };
}


// =========================================
// DELETE EMPLOYEE
// =========================================

function deleteEmployee(id) {

    employees =
        employees.filter(
            employee =>
                employee.id !== id
        );


    let result =
        [...employees];


    if (selectedDepartment !== "All") {

        result =
            result.filter(
                employee =>
                    employee.department
                        .toLowerCase()
                        ===
                    selectedDepartment
                        .toLowerCase()
            );
    }


    const searchText =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    if (searchText !== "") {

        result =
            result.filter(
                employee =>
                    employee.name
                        .toLowerCase()
                        .includes(searchText)
            );
    }


    displayEmployees(result);


    showMessage(
        "Employee deleted successfully."
    );
}


// =========================================
// SALARY CALCULATION
// =========================================

function calculateSalary(employeeList) {

    const totalSalary =
        employeeList.reduce(
            (
                total,
                employee
            ) =>
                total +
                Number(employee.salary),
            0
        );


    const averageSalary =
        employeeList.length > 0
            ? totalSalary /
              employeeList.length
            : 0;


    const highestEmployee =
        employeeList.length > 0
            ? employeeList.reduce(
                (
                    highest,
                    employee
                ) =>
                    Number(employee.salary) >
                    Number(highest.salary)
                        ? employee
                        : highest
            )
            : null;


    return {

        totalSalary:
            totalSalary,

        averageSalary:
            averageSalary,

        highestEmployee:
            highestEmployee
    };
}


// =========================================
// UPDATE DASHBOARD
// =========================================

function updateDashboard(employeeList) {

    const salaryData =
        calculateSalary(
            employeeList
        );


    // EMPLOYEE COUNT

    document
        .getElementById("employeeCount")
        .textContent =
            employeeList.length;


    // TOTAL SALARY

    document
        .getElementById("totalSalary")
        .textContent =
            "₹" +
            salaryData.totalSalary
                .toLocaleString("en-IN");


    // AVERAGE SALARY

    document
        .getElementById("averageSalary")
        .textContent =
            "₹" +
            Math.round(
                salaryData.averageSalary
            ).toLocaleString("en-IN");


    // HIGHEST SALARY

    document
        .getElementById("highestSalary")
        .textContent =
            salaryData.highestEmployee
                ? "₹" +
                  Number(
                      salaryData
                          .highestEmployee
                          .salary
                  ).toLocaleString("en-IN")
                : "₹0";


    // HIGHEST PAID EMPLOYEE

    const highest =
        document
            .getElementById(
                "highestEmployee"
            );


    if (salaryData.highestEmployee) {

        highest.innerHTML = `

            <strong>Name:</strong>
            ${salaryData.highestEmployee.name}

            <br>

            <strong>Department:</strong>
            ${salaryData.highestEmployee.department}

            <br>

            <strong>Salary:</strong>
            ₹${Number(
                salaryData.highestEmployee.salary
            ).toLocaleString("en-IN")}

        `;
    }

    else {

        highest.textContent =
            "No employee data available";
    }
}


// =========================================
// SORT EMPLOYEES
// =========================================

function sortEmployees(type) {

    let sorted =
        [...displayedEmployees];


    if (type === "name") {

        sorted.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name
                )
        );
    }


    else if (type === "age") {

        sorted.sort(
            (a, b) =>
                a.age - b.age
        );
    }


    else if (type === "salary") {

        sorted.sort(
            (a, b) =>
                Number(b.salary) -
                Number(a.salary)
        );
    }


    displayEmployees(
        sorted
    );
}


// =========================================
// CLEAR FORM
// =========================================

function clearForm() {

    document
        .getElementById("employeeForm")
        .reset();
}


// =========================================
// MESSAGE
// =========================================

function showMessage(text) {

    const message =
        document.getElementById(
            "message"
        );

    message.textContent =
        text;

    message.style.display =
        "block";


    setTimeout(
        function() {

            message.style.display =
                "none";

        },
        3000
    );
}


// =========================================
// START APPLICATION
// =========================================

fetchEmployees();