// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Manager class inherit from Employee class
const Employee = require("./Employee");

// Using constractor to create Manager class which extends from Employee class 
// and add office number in Manager property.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // return Manager as the role
    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;