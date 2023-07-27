// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	const license = renderLicenseSection(data.license);

	return `# ${data.title}
  \n ${license}
  \n ## Description 
  \n ${data.description} 
  \n ## Table of Contents
  \n - [1. Installation](#1-installation)
  \n - [2. Usage](#2-usage)
  \n - [3. Contributing](#3-contributing)
  \n - [4. Tests](#4-tests)
  \n - [5. Questions](#5-questions)
  \n - [6. Authors](#6-authors)
  \n - [7. License](#-license)
  \n ## 1. Installation
  \n ${data.installation}
  \n ## 2. Usage 
  \n ${data.usage}
  \n ## 3. Contributing 
  \n ${data.contributing}
  \n ## 4. Tests
  \n ${data.tests}
  \n ## 5. Questions
  \n For any questions or support with using this application, 
  \n 1. Submit an issue through my [GitHub Profile](${data.github})
  \n 2. Send me an email at ${data.email}
  \n ## 6. Authors
  \n ${data.authors}
  \n ## 7. License
  \n This project is covered under ${data.license} license.
`;
}

module.exports = generateMarkdown;
