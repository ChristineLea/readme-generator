// Packages required for the README generator
const inquirer = require("inquirer");
const fs = require("fs");
const modules = require("./utils/generateMarkdown.js");

// Questions array for user input. Will be passed in to the inquirer.prompt() function
const questions = [
	// Color is added to the messages to highlight the main information expected from user input ... \x1b[46m as an example
	// validate checks that a user has entered text & if not alerts them in red highlight color
	{
		type: "input",
		message:
			"To add a link to your GitHub profile, enter your \x1b[46m GitHub username \x1b[40m :",
		name: "github",
		validate: function (answer) {
			if (answer.length < 1 || answer === "") {
				console.log(
					"\x1b[31m%s \x1b[0m",
					"GitHub username can not be blank."
				);
			} else {
				return true;
			}
		},
	},
	{
		type: "input",
		message: "Enter your \x1b[46m email address \x1b[40m :",
		name: "email",
		validate: function (answer) {
			if (answer.length < 1 || answer === "") {
				console.log("\x1b[31m%s \x1b[0m", "Email cannot be blank");
			} else {
				return true;
			}
		},
	},
	{
		type: "input",
		message: "What is the \x1b[46m name \x1b[40m of your project?",
		name: "title",
		validate: function (answer) {
			if (answer.length < 1 || answer === "") {
				console.log(
					"\x1b[31m%s \x1b[0m",
					"Project name can not be blank."
				);
			} else {
				return true;
			}
		},
	},
	{
		type: "input",
		message: "Enter a \x1b[46m description \x1b[40m of your program :",
		name: "description",
		validate: function (answer) {
			if (answer.length < 1 || answer === "") {
				console.error(
					"\x1b[31m%s \x1b[0m",
					"Description can not be blank."
				);
			} else {
				return true;
			}
		},
	},
	{
		type: "input",
		message:
			"What are the steps required for \x1b[46m installation \x1b[40m ? ",
		name: "installation",
	},
	{
		type: "input",
		message: "Provide instructions for \x1b[46m usage \x1b[40m :",
		name: "usage",
		validate: function (answer) {
			if (answer.length < 1 || answer === "") {
				console.error("\x1b[31m%s \x1b[0m", "Usage can not be blank.");
			} else {
				return true;
			}
		},
	},
	{
		type: "input",
		message: "Enter any guidelines for \x1b[46m contributing \x1b[40m :",
		name: "contributing",
	},
	{
		type: "input",
		message: "Enter any instructions for running \x1b[46m tests \x1b[40m :",
		name: "tests",
	},
	{
		type: "input",
		message: "Enter details for \x1b[46m author/s \x1b[40m :",
		name: "authors",
		validate: function (answer) {
			if (answer.length < 1 || answer === "") {
				console.error("\x1b[31m%s \x1b[0m", "Author can not be blank.");
			} else {
				return true;
			}
		},
	},
	{
		type: "list",
		message: "Which \x1b[46m license \x1b[40m do you want to include?",
		name: "license",
		choices: [
			"MIT",
			"GPL_v2",
			"Apache_2.0",
			"GPLv3",
			"BSD_3--Clause",
			"EPL_1.0",
		],
	},
];

// Write the README.md file using node in-build file system npm
// highlight color added - red for error & green for success
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		err
			? console.error("\x1b[31m%s \x1b[0m", "Error!")
			: console.log(
					"\x1b[32m%s \x1b[0m",
					"Successfully generated README.md file!"
			  );
	});
}

async function init() {
	// on init, pass the questions array to the prompt() and await for user input
	const data = await inquirer.prompt(questions);
	console.log("\x1b[33m%s \x1b[0m", "Generating your README file ... ");

	// extract the github key's value and pass to GitHub API to fetch the link to user profile
	const getUser = await fetch(`https://api.github.com/users/${data.github}`);

	// extract the value from the return response object & update the value in the answers/data object
	const requestResponse = await getUser.json();
	data.github = requestResponse.html_url;

	// Then call back function used to generate the markdown with the data recieved from the user
	// which is then used to call the writeToFile function which will generate the end README.md file
	const generateMarkdown = modules(data);

	writeToFile("./output/README.md", generateMarkdown);
}

// Function call to initialize app
init();
