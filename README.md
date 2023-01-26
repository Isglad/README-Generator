# README-Generator

## Technology Used

| Technology Used         | Resource URL           | 
| ------------- |:-------------:|    
| Git | [https://git-scm.com/](https://git-scm.com/)     |   
| JavaScript   | [https://developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)      |
| Node.js  | [https://nodejs.org/docs/latest-v16.x/api/synopsis.html](https://nodejs.org/docs/latest-v16.x/api/synopsis.html)


## Description

A command-line application that dynamically generates a professional README file for your projects. This allows you to devote more time to working on the project.

[Link to the README Generator App](https://drive.google.com/file/d/1GCMFJXYBD-mgij5o6YD2_vjLDfAfLkAN/view)


![Generated README video record](/images/generated%20README.gif)

## Table of Contents

- [Code Example](#code-example)
- [Installation](#installation)
- [Usage](#usage)
- [Learning Points](#learning-points)
- [Author Info](#author-info)
- [Credits](#credits)
- [License](#license)


## Code Example

These lines of code prompt user to provide information of their project.
```js
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
```
Next, we will then generate a README file based on provided information.
```js
// Used lat & lon obtained from the input city name
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `${data}`, (err) => {
        err ? console.error(err) : console.log("SampleREADME.md has been successfully generated!")
    })
}
```

## Installation

- Visit the Node.js website to download and install Node.js to your computer
- Clone the repository to your local directory
- Create a .gitignore file that includes "node_modules/"  and  " .DS_Store/" before installing any npm dependencies.
- Run `npm init` to include a `package.json` to your repo with required dependencies.
- Run `npm i inquirer@8.2.4` to install inquirer module

## Usage

- Navigate to the root directory of your project in the command-line
- Run the command `node index.js` to start the application.
- Follow the prompts to input information about your project.
- A README file will be generated in the root directory of your project.

## Learning Points

- Build interactive command-line applications that process user input.
- Explain modularization and how it relates to npm and the standard library.
- Initialize new Node.js projects with npm, and install and import dependencies.
- Explain the importance and usefulness of ES6+ concepts such as let, const, and arrow functions.
- Handle asynchronicity with callbacks and Promises.

## Author Info 

```md
### Gladys Ange Isingizwe 


* [Email](gladyisingizwe@gmail.com)
* [LindeIn](www.linkedin.com/in/gladys-isingizwe)
* [Github]()https://github.com/Isglad
```

## Credits

Collabortors on this project are instructional staff, TAs and winter cohort 2022 of the University of Calfornia Berkeley Coding Bootcamp.

## License

Please refer to the LICENSE in the repo.