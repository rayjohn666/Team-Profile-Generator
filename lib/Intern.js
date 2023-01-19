const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, officeNumber) {
        // call parent constructor here:
        super(name, id, email);

        this.officeNumber = officeNumber;
    } 
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Intern";
    }

}

module.exports = Intern;