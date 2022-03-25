const { prompt } = require("inquirer");
const { writeFile } = require("fs");
const questions = require("./utils/questions");
const license = require("./utils/license");
const makeMD = require("./utils/makeMD");
const generateInfo = require("./utils/genInfo");
let answers = [];

prompt(questions).then((userAnswers) => {
    prompt(license).then((userInput) => {
        userInput.info = generateInfo(userInput);
        answers = Object.assign(userAnswers, userInput);
        writeFile('exampleREADME.md', makeMD(answers), () =>
            console.log('File Created')
        )
    });
});