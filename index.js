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
            message: 'Enter your employee ID (Requiered)',
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
            name: 'gihubUsername',
            message: 'Enter your Github username. (Required)',
            validate: gihubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your Github username.');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log (answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.gihubUsername,);
        teamMembers.push(engineer);
        promptMenu();
    })
};


