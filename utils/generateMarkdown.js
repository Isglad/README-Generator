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
function generateMarkdown(data) {}

module.exports = generateMarkdown;
