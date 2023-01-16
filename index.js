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


const render = require('../src/template');
