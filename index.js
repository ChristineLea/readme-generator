// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const modules = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const questions = [
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


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
