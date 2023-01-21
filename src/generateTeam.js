const Employee = require("../lib/Employee")
// generate manager in h3 tag

require

const generatePage = team => {

    console.log(team);

    const managerCard = manager => {
        return `
        ${manager.getOfficeNumber()}
        ${manager.getName()}
        ${manager.getId()}
        ${manager.getEmail()}
        ${manager.getRole()}`
    }
    const engineerCard = engineer => {
        return `
        ${engineer.getGithub()}
        ${engineer.getName()}
        ${engineer.getId()}
        ${engineer.getEmail()}
        ${engineer.getRole()}`
        
    }
    const internCard = intern => {
        return `
        ${intern.getSchool()}
        ${intern.getRole()}
        ${intern.getName()}
        ${intern.getId()}
        ${intern.getEmail()}
        `
    }
    const employeeCard = employee => {
        return `
        ${employee.getName()}
        ${employee.getId()}
        ${employee.getEmail()}
        ${employee.getRole()}`
    }
    
    
    const generateCards = data => {
    cards.push(team.filter(employee=>employee.getRole() === "Manager").map(manager=>managerCard(manager)));
    return cards.join("")
    }
}
// TODO: get cards to print data for managers and employees.
module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team</title>
    <link rel="stylesheet" href="./assets/style.css">
</head>
<body>
    ${generatePage(team)}
    
    <ul class="card-wrapper">
  <li class="card">
  <a href=""><h3></h3></a>
    <p></p>
  </li>
  <li class="card">
    
   <a href=""><h3>
   </h3></a>
    <p>t</p>
  </li>
  <li class="card">
    
  <a href=""><h3></h3></a>
    <p></p>
  </li>
</ul>

</body>
</html>`

}

// const generateCard = data => {

//   const userData = employee => {
//       if (employee.officeNumber) {
//           return `Office Number: ${employee.officeNumber}`
//       }
//       if (employee.school) {
//           return `School: ${employee.school}`
//       }
//       if (employee.github) {
//           return `<div class="social">GitHub: <a href="https://github.com/${employee.github}" target="_blank"> <i class="fab fa-github"></i> </a></div>`
          
//       }
//   };

//   const employee = employee => {
//       if (employee.getRole()=="Manager") {
//           return `../assets/images/Manager.png`
//       }
//       if (employee.getRole()=="Engineer") {
//           return `../assets/images/Engineer.png`
//       }
//       if (employee.getRole()=="Intern") {
//           return `../assets/images/Intern.png`
//       }
//   };

  
//   return `            
//           ${data.map( teamMember => {
//               return `
//               <div class="col-md-6 col-lg-4 item">
//                   <div class="box"> <img class="rounded" src=${userImg(teamMember)}> 
//                       <h3 class="name">${teamMember.getName()}</h3>
//                       <p class="title">${teamMember.getRole()}</p>
//                       <p class="description">Id: ${teamMember.getId()} </p>
//                       <p class="description">Email: <a href="mailto:${teamMember.getEmail()}"> ${teamMember.getEmail()} </a> </p>
//                       <p class="description">${userData(teamMember)}</p>
//                   </div> 
//               </div>
//       `
//       }).join('')}            
//   `
// }

// module.exports = {
//   generateTeamHtml
// };