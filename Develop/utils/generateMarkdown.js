// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// License Function
let licenseBadge = '';

function renderLicense(data) {
    for (const license of data.license) {
        if (license == "MIT"){
            licenseBadge += '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)';
        } else if (license == 'Apache') {
            licenseBadge += '[![License: Apache v2](https://img.shields.io/badge/License-Apache%202.0-red.svg)](https://opensource.org/licenses/Apache-2.0)';
        } else if (license == 'BSD') {
            licenseBadge += '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-yellow.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        } else if (license == 'Eclipse') {
            licenseBadge += '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
        }
    }
    return licenseBadge;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicense(data)}

  ## Description:
  ---
  ${data.description}


  ## Table of Contents:
  ---
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation:
  ---
  ${data.installation}


  ## Usage:
  ---
  ${data.usage}


  ## License:
  ---
  ${`${data.license} License`}


  ## Contributions:
  ---
  ${data.contributions}


  ## Tests:
  ---
  ${data.tests}
  

  ## Questions?
  ---
  If you have any questions, contact me via email at ${data.email}.
  For more applications, check out and follow my GitHub profile at [${data.username}](https://github.com/${data.username}).
`;
}

// Exports this JavaScript file so that it can be used with the index.js file
module.exports = generateMarkdown;