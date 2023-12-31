// Import necessary modules
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'text',
    message: 'Descripe your project?',
    name: 'description',
  },
  {
    type: 'text',
    message: 'Describe the installation process of the project?',
    name: 'installation',
  },
  {
    type: 'text',
    message: 'What is the purpose of your project?',
    name: 'usage',
  },
  {
    type: 'checkbox',
    message: 'What license did you use?',
    choices: ['MIT', 'Boost', 'Apache', 'IBM', 'n/a'],
    name: 'license',
  },
  {
    type: 'text',
    message: 'What resources contributed to the project?',
    name: 'contributions',
  },
  {
    type: 'text',
    message: 'Tests?',
    name: 'tests',
  },
  {
    type: 'text',
    message: 'Enter Github Username',
    name: 'questions',
  },
  {
    type: 'text',
    message: 'Enter Email',
    name: 'email',
  },
];

// Function to write the generated markdown to a file
function writeToFile(data) {
  fs.writeFile(`./dist/${data.title}.md`, genReadme(data), (err) => 
    err ? console.error(err) : console.log('success!'))
}

// Function to generate the markdown based on user responses
function genReadme(res) {
  return ` ${generateMarkdown(res)}
  ## Table of Contents
  [Description](#description)

  [Installation](#installation)
  
  [Usage](#usage)
  
  [License](#license)

  [Contributions](#contributions)
  
  [Tests](#tests)

  [Questions](#questions)

  ## Description
  ${res.description}
  
  ## Installation
  
  ${res.installation}
  
  ## Usage
  
  ${res.usage}
  
  ## License

  ${res.license}

  ## Contributions

  ${res.contributions}

  ## Tests

  ${res.tests}

  ## Questions 

  https://github.com/${res.questions}

  For more questions, you can reach me at ${res.email}
  `
}

// Initialize the application using Inquirer.js
function init() {
  inquirer
  .prompt(questions)
  .then((response) =>
    writeToFile(response))
}

// Function call to initialize app
init();
