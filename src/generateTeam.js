const generatePage = team => {
    const managerCard = manager => {
        return `
        ${manager.getOfficeNumber()}`
    }
    const engineerCard = engineer => {}
    const internCard = intern => {}
    
    const cards = []
    cards.push(team.filter(employee=>employee.getRole() === "Manager").map(manager=>managerCard(manager)));
    return cards.join("")
}

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
    
   <a href=""><h3>${manager.getName()}</h3></a>
    <p></p>
  </li>
  <li class="card">
    
    <h3><a href=""></a></h3>
    <p>t</p>
  </li>
  <li class="card">
    
    <h3><a href=""></a></h3>
    <p></p>
  </li>
</ul>

</body>
</html>`

}