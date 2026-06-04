/*
     _id     |name   |age    |salary
    --------------------------------
    ax01    |Ray    |28     |1300
    qs84    |Lucius |31     |840
    bg33    |Taylor |18     |2700
 */

const employees = {
    ax01: {
        name: "Ray",
        age: 28,
        salary: 1300
    },
    qs84: {
        name: "Lucius",
        age: 31,
        salary: 840
    },
    bg33: {
        name: "Taylor",
        age: 18,
        salary: 2700
    }
};


function findEmployeeSalary(employeeID) {
    if (!(employeeID in employees)) {
        return `${employeeID} not found.`
    }
    
    return employees[employeeID].salary;
}

console.log(findEmployeeSalary("bg33"))