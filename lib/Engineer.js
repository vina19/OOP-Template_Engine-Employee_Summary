// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Engineer class that inherit from Employee class
const Employee = require("./Employee");

// Using constractor to create Engineer class which extends from Employee class 
// and add github username and getGithub() property and method .
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // return engineer as the role
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;