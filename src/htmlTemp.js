// Generates page structure using Bootstrap and Fontawesome
const generateHTML = function (teamString) {

    return `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Portfolio</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
</style>

</head>

<body>

<div class="header">
<div class="jumbotron bg-danger">
   <h1 class="display-4 text-white text-center">Blackwell's Super Awesome Team</h1>
</div>
</div>

<div class="container-body container-fluid">
   <div class="row">
        ${teamString} 
    </div>
</div>

<script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>  
</body>

</html>`

}

// Generates cards for each employee class based on user input in Inquirer
const generateCard = function (arr) {

    // Criteria for display
    let roleInfo;

    if (arr.title === "Manager") {
        roleInfo = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "Engineer") {
        roleInfo = `GitHub Username: <a href="https://github.com/${arr.github}" target="_blank">${arr.github}</a>`
    } else if (arr.title === "Intern") {
        roleInfo = `School: ${arr.school}`
    }

    return `
    
<div class="col-md-4 col-sm-6 col-12 col-lg-3">    
    <div class="card shadow-lg mb-5 bg-white rounded">
        <div class="card-header bg-primary">
            <h4 class="text-white text-center">${arr.name}</h4>  
        </div>

        <div class="card-body">
            <ul class="list-unstyled">
                <li>ID: ${arr.id}</li>
                <li>Email: <a href="mailto:${arr.email}">${arr.email}</a></li>
                <li>${roleInfo}</li>
            </ul>
        </div>
    </div>
</div>
`
}

exports.generateHTML = generateHTML;
exports.generateCard = generateCard;