//Packages

const fs = require('fs');
const path = require('path');
const jest = require('jest');
const inquirer = require('inquirer');

// Team Generator 
const generateTeam = require('./utils/generateTeam');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const ouputPath = path.join(OUTPUT_DIR, "Index.html");
const render = require('../src/template');

const teamMembers = [];

const promptManager = () => {
    return inquierer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your emailaddress (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the office Number. (Required)',
        validate: officeNumber => {
            if (githubUsername) {
                return true;
            } else {
                console.log('Please enter your Github username.');
                return false;
            }
        }
    
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your Github username. (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your Github username.');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log (answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.gihubUsername,);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Select which option you would like to conitnue with',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break;
                case "add an intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();    

            }
        });
};

const promptEngineer = () => {
    console.log(`
    ===============
    Add a New Engineer
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of engineer? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the name of engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email. (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your Github username. (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your Github username.');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        promptMenu();
    })

    
};

const promptIntern = () => {
    console.log(`
    ===============
    Add a New Intern
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of intern? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter the name of engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email. (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your Github username. (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your Github username.');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Intern(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`
    ====Finished buildling my Team!===
    `);

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFile("./output/team.html", "html");
}

promptManager();