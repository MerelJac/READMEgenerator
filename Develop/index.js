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
function writeToFile(answers) {
    let license;
    let icon;
    if (answers.license === 'MIT') {
        icon = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        license = "MIT permissions with usage of this code, permitting users to freely use, modify, and distribute this code with limited libility.";
    } if (answers.license === 'ISC') {
        icon = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
        license = "ISC permissions with usage of this code, permitting users to freely use, modify, and distribute this code with limited libility.";
    } if (answers.license === 'zLIB') {
        icon = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
        license = "zLIB permissions with usage of this code, permitting users to freely use, modify, and distribude with limited libability.";
    }

    var md = `<md><h1>${answers.title}</h1><p>${icon}</p><h2>Description</h2><p>${answers.description}</p><h2>Table of Contents</h2><ul>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contribution">Contribution</a></li>
    <li><a href="#test">Test Instructions</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li></ul>
    <h2 id="installation">Installation</h2><p>${answers.installation}</p><h2 id="usage">Usage</h2><p>${answers.usage}</p><h2 id="contribution">Contribution</h2><p>${answers.contribution}</p><h2 id="test">Test Instructions</h2><p>${answers.test}</p><h2 id="license">License</h2><p>${license}</p><h2 id="contact">Contact</h2><p>Please contact for questions, suggestions or comments about this application. [GitHub Profile](https://github.com/${answers.gitHub})</p><p>For further questions, please contact me via email: ${answers.email}</p></md>`
    fs.writeFile('README.md', md, (err) => {
        err ? console.error(err) : console.log('successful')
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(answers)});
}

// Function call to initialize app
init();

