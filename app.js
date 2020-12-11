const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// npm library which validate the text input
const validator = require('validator');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Team array to hold the team list
const teamArry = [];

// Manager Prompt input
const managerPrompt = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is your name?',
        validate: function (input) {
            if (input === "") {
                return 'This field is required to be filled to add a member';
            }
            else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is your number id?',
        validate: function (input) {
            if (typeof input === 'number') {
                return true;
            }
            else if (input === "") {
                return 'This field is required to be filled to add a member';
            }
            else {
                return 'Please enter a valid number';
            }
        },
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your email?',
        validate: function (input) {
            if (validator.isEmail(input)) {
                return true;
            }
            else if (input === "") {
                return 'This field is required to be filled to add a member';
            }
            else {
                return 'Please enter a valid email address';
            }
        }

    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
        validate: function (input) {
            if (typeof input !== 'number') {
                return 'Please enter a valid number';
            }
            else if (input === "") {
                return 'This field is required to be filled to add a member';
            }
            else {
                return true;
            }
        },
    },
];

// Main function which use the manager prompt above to get the manager info
// and create a new manager with its data.
// Then push all that data to the team array.
const main = () => {

    inquirer.prompt(managerPrompt).then((data) => {
        
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber)
        
        teamArry.push(manager);

        // Ask the manager if he/she want to add members to the team.
        addTeam();
    });
};

// Add Engineer Team Prompt input
const addTeamPrompt = [
    {
        type: 'list',
        name: 'addMembers',
        message: 'Would you like to add members in your Engineer Team? Please select member role for yes or select "Done" to show team members.',
        choices: [
            'Engineer',
            'Intern',
            'Done',
        ],
        validate: function (input) {
            if (input === "") {
                return 'This field is required to be selected based on the new member role to add a member';
            }
            else {
                return true;
            }
        },
    },
];

// Add team member function where the manager would be displayed with a prompt asking if
// the manager would like to add members in the team with choices of team role (Engineer and Intern).
const addTeam = () => {

    inquirer.prompt(addTeamPrompt).then((data) => {
        
        // The condition if the manager choose Engineer as the new team member role then call the get engineer member info function,
        // if the manager choose Intern as the new team member role then call the get intern info function,
        // or else if the manager choose done then team.html page will be generated with all the employees summary.
        switch(data.addMembers) {
            case 'Engineer':
                getEngineerInfo();
                break;
            case 'Intern':
                getInternInfo();
                break;
            case 'Done':
                generateTeamSummary();
                break;
            default:
                generateTeamSummary();
                break;
        };
    });
};

// Engineer Prompt input
const engineerPrompt = [
    {
        type: 'input',
        name: 'engineerName',
        message: "Please enter the engineer's name:",
        validate: function (input) {
            if (input === "") {
                return 'This field is required to be filled to add a member';
            }
            else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "Please enter the engineer's id number:",
        validate: function (input) {
            if (typeof input !== 'number') {
                return 'Please enter a valid number';
            }
            else if (input === "") {
                return 'This field is required to be filled to add a member';
            }
            else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "Please enter the engineer's email:",
        validate: function (input){

            if (validator.isEmail(input)) {
                return true;
            }
            else if (input === "") {
                return 'This field is required to be filled to add a member';
            }
            else {
                return 'Please enter a valid email address';
            }
        },
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: "Please enter the engineer's GitHub username:",
        validate: function (input) {
            if (input === "") {
                return 'This field is required to be filled to add a member';
            }
            else {
                return true;
            }
        },
    },
];

// Getting engineer info function which use the engineer prompt above to get engineer info
// and then throw its data input to the new engineer class that then will be push to the team array.
const getEngineerInfo = () => {

    inquirer.prompt(engineerPrompt).then((data) => {

        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);

        teamArry.push(engineer);

        addTeam();
    });
};

// Intern Prompt input
const internPrompt = [
    {
        type: 'input',
        name: 'internName',
        message: "Please enter the intern's name:",
        validate: function (input) {
            if (input === "") {
                return 'This field is required to be filled to add a member';
            }
            else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'internId',
        message: "Please enter the intern's id:",
        validate: function (input) {
            if (typeof input !== 'number') {
                return 'Please enter a valid number';
            }
            else if (input === "") {
                return 'This field is required to be filled to add a member';
            }
            else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "Please enter the intern's email:",
        validate: function (input){

            if (validator.isEmail(input)) {
                return true;
            }
            else if (input === "") {
                return 'This field is required to be filled to add a member';
            }
            else {
                return 'Please enter a valid email address';
            }
        },
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "Please enter the intern's school:",
        validate: function (input) {
            if (input === "") {
                return 'This field is required to be filled to add a member';
            }
            else {
                return true;
            }
        },
    },
];

// Getting intern info function which use the intern prompt above to get intern info
// and then throw its data input to the new intern class that then will be push to the team array.
const getInternInfo = () => {

    inquirer.prompt(internPrompt).then((data) => {

        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);

        teamArry.push(intern);

        addTeam();
    });
};

// Writing a file name team.html which already set up in outputPath variable with the collection data of team summary
// from the team array and throw error if failing in rendering the html file or console.log success if success in writing the file. 
const generateTeamSummary = () => {

    fs.writeFile(outputPath, render(teamArry), (err) =>
        err ? console.log(err) : console.log('Your html file with employee summary has been successfully generated!')
    );
};

// Call the main function which will start the app
main();