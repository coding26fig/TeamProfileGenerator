const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const team = [];
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the managers name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the manager's employee id?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is the manager's email address?",
      name: "managerEmailAddress",
    },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "managerOfficeNumber",
    },
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmailAddress,
      answers.managerOfficeNumber
    );
    team.push(manager);
    // console.log(team);

    askQuestion();
  });

function askQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add another team member?",
        name: "teamChoice",
        choices: ["Intern", "Engineer", "Finish"],
      },
    ])
    .then((answers) => {
      if (answers.teamChoice === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "what is the intern's name?",
              name: "internName",
            },
            {
              type: "input",
              message: "what is the intern's id?",
              name: "internId",
            },
            {
              type: "input",
              message: "what is the intern's email?",
              name: "internEmail",
            },
            {
              type: "input",
              message: "what is the intern's school?",
              name: "internSchool",
            },
          ])
          .then((answers) => {
            const intern = new Intern(
              answers.internName,
              answers.internId,
              answers.internEmail,
              answers.internSchool
            );
            team.push(intern);
            console.log("Intern added!");
            askQuestion();
          });
      } else if (answers.teamChoice === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "what is the engineer's name?",
              name: "engineerName",
            },
            {
              type: "input",
              message: "what is the engineer's id?",
              name: "engineerId",
            },
            {
              type: "input",
              message: "what is the engineer's email?",
              name: "engineerEmail",
            },
            {
              type: "input",
              message: "what is the engineer's github?",
              name: "engineerGithub",
            },
          ])
          .then((answers) => {
            const engineer = new Engineer(
              answers.engineerName,
              answers.engineerId,
              answers.engineerEmail,
              answers.engineerGithub
            );
            team.push(engineer);
            console.log("Engineer added!");
            askQuestion();
          });
      } else if (answers.teamChoice === "Finish") {
        // console.log('finish')
        createHTML();
      }
    });
}

function createHTML() {
  console.log(team);
  var headString = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>

  <div class="container">

    <h1>The Dream Team</h1>
    <br>
    <div class="row">`;
  var tailString = `  </div>
  </div>



  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</body>
</html>`;
  var teamString = "";
  team.forEach((member) => {
    if (member.officeNumber != undefined) {
      teamString += `
         <div class="col-12 col-md-4">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h1> 💼 </h1>
          <h5 class="card-title">${member.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Office Number: ${member.officeNumber}</h6>
           <h6 class="card-subtitle mb-2 text-muted">Email: <a href="mailto:${member.email}"> ${member.email} </a>  </h6>
            <h6 class="card-subtitle mb-2 text-muted">Id: ${member.id}</h6>
        </div>
      </div>
    </div>
        `;
    } else if (member.school != undefined) {
      teamString += `
         <div class="col-12 col-md-4">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h1> 📘</h1>
          <h5 class="card-title">${member.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">School: ${member.school}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Email: <a href="mailto:${member.email}"> ${member.email} </a>  </h6>
            <h6 class="card-subtitle mb-2 text-muted">Id: ${member.id}</h6>
        </div>
      </div>
    </div>
        `;
    } else if (member.github != undefined) {
      teamString += `
         <div class="col-12 col-md-4">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h1>🤓</h1>
          <h5 class="card-title">${member.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Github: <a href="https://www.github.com/${member.github}"> ${member.github} </a> </h6>
         <h6 class="card-subtitle mb-2 text-muted">Email: <a href="mailto:${member.email}"> ${member.email} </a>  </h6>
            <h6 class="card-subtitle mb-2 text-muted">Id: ${member.id}</h6>
        </div>
      </div>
    </div>
        `;
    }
  });

  fullString = headString + teamString + tailString;

  fs.writeFile("index.html", fullString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("HTML created!");
    }
  });
}
