// Packages needed for the application
const fs = require("fs");
const inquirer = require("inquirer");
const generateShape = require("./lib/shape.js");
const textFile = require("./lib/text.js");
const writeToFile = require("./lib/write.js");

// Questions the user will be asked to create the SVG file
const questions = [
    {
        type: 'input',
        name: 'text',
        message: "Please enter logo text (No more than 3 characters): "
    },
    {
        type: 'input',
        name: 'tcolor',
        message: "Please enter color for the text: "
    },
    {
        type: 'list',
        name: 'shape',
        message: "Please select shape for the logo: ",
        choices: ["triangle","circle","square"]
    },
    {
        type: 'input',
        name: 'scolor',
        message: "Please enter color for the shape: "
    }
];

// function to initialize the app
function init() {
    inquirer.prompt(questions)
    .then((res) => {

        const dataForFile = new writeToFile(res);

        dataForFile.file();
    });
}

// calling function to initialize app
init();