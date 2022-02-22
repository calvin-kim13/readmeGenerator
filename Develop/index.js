// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation of this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license for your project.',
        choices: ['MIT', 'Apache', 'BSD', "Eclipse"]
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How can others provide contributions to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email adress?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) => {
        err ? console.error(err) : console.log(`${fileName} was successfully created.`);
    });
};

// TODO: Create a function to initialize app
async function init() {
    const data = await inquirer.prompt(questions);
    writeToFile('README', generateMarkdown(data));
};

// Function call to initialize app
init();
