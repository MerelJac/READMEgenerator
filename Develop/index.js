// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
let questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the project title?'
}, {
    type: 'input',
    name: 'description',
    message: 'Please add a description of this project.'
}, {
    type: 'input',
    name: 'installation',
    message: 'Please add installation instructions for this project.'
}, {
    type: 'input',
    name: 'usage',
    message: 'Please add usage information for this project.'
}, {
    type: 'input',
    name: 'contribution',
    message: 'Please add contribution guidelines for this project.'
}, {
    type: 'input',
    name: 'test',
    message: 'Please add test instructions for this project.'
}, {
    type: 'list',
    message: 'Please choose a license for this project.',
    name: 'license',
    choices: ["MIT", "ISC", "zLib"]
}, {
    type: 'input',
    name: 'gitHub',
    message: 'Please enter your GitHub Username.'
}, {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.'
}    
];

// TODO: Create a function to write README file
function writeToFile(answers, data) {
    var md = `<md><h1>File Name</h1><p>${answers.name}</p><h2>Description</h2><p>${answers.description}</p><h2>Installation</h2><p>${answers.installation}</p><h2>Usage</h2><p>${answers.usage}</p><h2>Contribution</h2><p>${answers.contribution}</p><h2>Test Instructions</h2><p>${answers.test}</p><h2>License</h2><p>${answers.license}</p><h2>Contact Information</h2><p>${answers.gitHub}</p><p>${answers.email}</p></md>`
    fs.writeFile('README.md', md, (err) => {
        err ? console.error(err) : console.log('successful')
    })
}


// // TODO: Create a function to initialize app
// function init() {
//     inquirer.createPromptModule(questions);
// }

// // Function call to initialize app
// init();



inquirer.prompt(questions).then((answers) => {
    writeToFile(answers)
});

