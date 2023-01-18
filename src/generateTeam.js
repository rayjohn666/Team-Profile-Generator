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
</head>
<body>
    ${generatePage(team)}
</body>
</html>`

}