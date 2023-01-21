//Packages

const fs = require('fs');
const path = require('path');
// const jest = require('jest');
const inquirer = require('inquirer');

// Team Generator 
const generateTeam = require('./src/generateTeam');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
// const render = require('../src/template');

const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt ([
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
            if (officeNumber) {
                return true;
            } else {
                console.log('Please enter the Office number');
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
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.gihubUsername, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Select which option you would like to continue with...',
            choices: ['add an engineer', 'add an intern', 'add a manager' , 'finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break;
                case "add an intern":
                    promptIntern();
                    break;
                case "add a manager":
                    promptManager();
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

// const promptIntern = () => {
//     console.log(`
//     ===============
//     Add a New Intern
//     ===============
//     `);

//     return inquirer.prompt([
//         {
//             type: `input`,
//             name: `internName`,
//             message: `What is your Intern's name?`,
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log(`Please enter the Intern's name.`);
//                     return false;
//                 }
//             }
//         },
//         {
//             type: `input`,
//             name: `internId`,
//             message: `What is your Intern's employee ID?`,
//             validate: nameInput => {
//                 if (!nameInput) {
//                     console.log("Please enter a valid manager ID.");
//                     return false;
//                 } else {
//                     return true;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'Enter your emailaddress (Required)',
//             validate: email => {
//                 if (email) {
//                     return true;
//                 } else {
//                     console.log('Please enter your email address.');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: `input`,
//             name: `internSchool`,
//             message: `What school is your Intern attending?`,
//             validate: nameInput => {
//                 if (!nameInput) {
//                     console.log(`Please enter a valid institution.`)
//                     return false;
//                 } else {
//                     return true;
//                 }
//             }
//         },
//     ]).then(answers => {
//         const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
//         teamArray.push(intern);
//         console.log(`Your Intern has been added to the team!`);
//         addEmployee();
//     })
// };
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`
    ====Finished building my Team!===
    `
    + teamMembers
    );

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFile("index.html", generateTeam(teamMembers),(err) => 
    err ? console.log("Error"): console.log ("No Error"))
};


promptManager();