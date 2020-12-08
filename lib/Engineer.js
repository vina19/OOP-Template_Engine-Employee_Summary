// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Engineer class that inherit from Employee class
const Employee = require("./Employee");

// Using constractor to create Engineer class which extends from Employee class 
// and add github username and getGithub() class.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;