// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Intern class that inherit from Employee class
const Employee = require("./Employee");

// Using constractor to create Intern class which extends from Employee class 
// and also add school and getSchool() property and method.
class Intern extends Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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

    getSchool() {
        return this.school;
    }

    // return intern as the role
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;