const Employee = require("../lib/Employee")
// generate manager in h3 tag

require

const generatePage = team => {
    let html = ""
    for (let index = 0; index < team.length; index++) {
        const teamMember = team[index];

        if (teamMember.type === "Employee") {
            html += `<li class="card">
            <h3> Employee </h3>

            <p>Name: ${teamMember.name}</p>
            <p>Email: ${teamMember.email}</p>
            <p>Id: ${teamMember.id}</p>

            </li>
            `
            
        };



        if (teamMember.type === "manager"){
            html += `

            <li class="card">

            <h3> Manager </h3>

            
            <p>Name: ${teamMember.name}</p>
            <p>Email: ${teamMember.email}</p>
            <p>Id: ${teamMember.id}</p>
            <p>Office Number: ${teamMember.officeNumber}</p>

            </li>
            `

        };



        if (teamMember.type === "engineer") {
            html += `<li class="card">
            <h3> Engineer </h3>
            
            <p>Name: ${teamMember.name}</p>
            <p>Email: ${teamMember.email}</p>
            <p>Id: ${teamMember.id}</p>
            <p>Github: ${teamMember.github}</p>
            
            </li>
            `
            
        };

        if (teamMember.type === "intern") {
            html += `<li class="card">
            <h3> Intern </h3>
            
            <p>Name: ${teamMember.name}</p>
            <p>Email:${teamMember.email}</p>
            <p>Id: ${teamMember.id}</p>
            <p>School: ${teamMember.school}</p>
            
            </li>
            `
            
        };

    }

    console.log(team);
    return html
}

    
// TODO: add engineer, intern, and employee in cards.
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
    
   

</body>
</html>`

}

