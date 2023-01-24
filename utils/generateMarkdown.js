// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = "";
  if (license !== "None"){
    badge = `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = "";
  if (license !== "None"){
    licenseLink = `* [License](#license)`
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection = "";
  if (license !== "None"){
    licenseSection = `
## License

This application is covered under the ${license} license.
     `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var badge = renderLicenseBadge(data.license);
  var licenseLink = renderLicenseLink(data.license);
  var licenseSection = renderLicenseSection(data.license);
  // use user's username to retrieve their github link
  var githublink = `https://github.com/${data.username}`
  // create an array that stores installation instructions that are splitted by comma
  var installationArr = data.installation.split(",")
  var installationSection = "";
  // loop over each installation instruction and display each on its line
  installationArr.forEach((currentValue) => {
    installationSection +=`
\n${currentValue}`;
  })

  return `${badge}\n # ${data.title}

## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${licenseLink}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installationSection}

## Usage

${data.usage}
${licenseSection}
## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

If you have any questions,please reach out to me via my contact information listed below:\n
My GitHub username: ${data.username}\n
My GitHub profile: ${githublink}\n
My email: ${data.email}`;
}

module.exports = generateMarkdown;
