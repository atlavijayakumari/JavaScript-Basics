//Scope in js

let company = "TechCorp"; // Global scope

function employeeDetails() {

    let name = "John Doe"; // Local scope

    console.log(name); // Accessible here
    console.log(company); // Accessible here

    if(true){
        let salary = 50000; // Block scope
        const department = "Engineering"; // Block scope
        console.log(salary); // Accessible here
        console.log(department); // Accessible here
    }
}

employeeDetails();

console.log(company); // Accessible here