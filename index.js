const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const Manager = require("./lib/Manager");
// const Enginer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

const myTeam = [];

const startQuestions = () => {
    [{
    type: "input",
    message: "Please enter Team Manager name",
    name: "managerName"
},
{
    type: "input",
    message: "Please enter Team Manager employee ID",
    name: "managerID"
},
{
    type: "input",
    message: "Please enter Team Manager emaill address",
    name: "managerEmail"
},
{
    type: "input",
    message: "Please enter Team Manager office number",
    name: "managerOffice"
}]

let newManager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice);
// remove console.log
console.log(newManager);
myTeam.push(newManager);
// remove console.log
console.log(myTeam)

buildQuestion();
};

const teamQuestions = [{
    type: "input",
    message: "Please enter Team Member name",
    name: "memberName"
},
{
    type: "input",
    message: "Please enter Team Member employee ID",
    name: "memberID"
},
{
    type: "input",
    message: "Please enter Team Member emaill address",
    name: "memberEmail"
},
{
    type: "input",
    message: "Please enter Team Member GitHub username",
    name: "memberGitHub"
}]


const buildQuestion = () => {

    inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do next?",
            choices: ["Add team member", "Finish"],
            name: "buildTeam"
        }
    ]).then(response => {
        // take out console.log
        console.log(response);
        const buildTeam = response.buildTeam;
        switch (buildTeam) {
            case "Add team member":
            inquirer
            .prompt(teamQuestions)
            .then(response => {
                let newMember = new Member(response.memberName, response.memberID, response.memberEmail, response.memberGitHub);
                // remove console.log
                console.log(newMember);
                myTeam.push(newMember);
                // remove console.log
                console.log(myTeam);

                buildQuestion();
            });
        
    
        break;

    case "Finish":
        if (myTeam.length > 0) {
            writeHTML(render(myTeam));
            console.log("Your team is created!" );
        } else {
            console.log("No Team Members have been added")
            startQuestions();
        }
        break;
    };
});
}

const writeHTML = HTML => {
    fs.writeFileSync(outputPath, HTML, err => {
        if (err) {
            return console.log(err);
        }
    });
}

startQuestions();