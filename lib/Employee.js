// TODO: Write code to define and export the Employee class
// Using constructor to create Employee class with its properties and methods.
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // get name function to return the name of the employee
    getName() {
        return this.name;
    }

    // get id function to return the id of the employee
    getId() {
        return this.id;
    }

    // get email function to return the email of the employee
    getEmail() {
        return this.email;
    }

    // get role function that returning the role of the employee which is employee
    getRole() {
        return 'Employee';
    }
};

// export the module Employee class
module.exports = Employee;