// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'username',
        message: 'What is the github username? (Required)'
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is the github link? (Required)'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project? (Required)'
    },


    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have? (Required)',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3']
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information? (Required)'
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Enter conbtribution guidelines? (Required)'
    },

    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions? (Required)'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile('README.md', generateMarkdown({
            ...response
        }))

    });
};

    // Function call to initialize app
    init();
