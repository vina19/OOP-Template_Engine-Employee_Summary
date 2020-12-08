// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Manager class inherit from Employee class
const Employee = require("./Employee");

// Using constractor to create Manager class which extends from Employee class 
// and add office number in Manager class.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;