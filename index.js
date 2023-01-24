// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Please provide a short description of your project",
    "Please provide installation instructions of your project and separate them by comma",
    "Please provide usage information:",
    "Please provide contribution guidelines:",
    "Please provide test instructions:",
    "Please choose a license for your application:",
    "Please enter your GitHub username:",
    "Please enter your email:"
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `${data}`, (err) => {
        err ? console.error(err) : console.log("SampleREADME.md has been successfully generated!")
    })
}

// Create a function that prompt user to answer questions
function promptUser(questions){
    inquirer.prompt([
        { type: "input", name: "title", message: questions[0]},
        { type: "input", name: "description", message: questions[1]},
        { type: "input", name: "installation", message: questions[2]},
        { type: "input", name: "usage", message: questions[3]},
        { type: "input", name: "contribution", message: questions[4]},
        { type: "input", name: "test", message: questions[5]},
        { type: "list", name: "license", message: questions[6], choices: ["MIT", "ISC", "Apache", "BoostSoftware", "None"]},
        { type: "input", name: "username", message: questions[7]},
        { type: "input", name: "email", message: questions[8]}
    ]).then(answers => {
        writeToFile("SampleREADME.md", generateMarkdown(answers))
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();