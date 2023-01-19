const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        // call parent constructor here:
        super(name, id, email, github);

        this.officeNumber = officeNumber;
    } 
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;