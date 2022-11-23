
// TODO: Create an array of questions for user input
var thisQuestion = $('#question'+{QID}+'');
        var nextQuestion1 = $(thisQuestion).nextAll('.text-short:eq(0)');
        var nextQuestions = $(nextQuestion1);
 
      var nextLength = nextQuestions.length;
        var sqLength = ('tr.answers-list', thisQuestion).length;
 


// TODO: Create a function to write README file
function writeREADMEFile(data)
    var nodejs = `<!DOCTYPE node.js>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Output node.js</title>
    </head>
    <body>
      ${data}
    </body>`;
    return fs.writeFile("index.js", html, (err) => {
      if(err) return console.error(err);
      console.log("Success!");
    });

// TODO: Create a function to initialize app
const inquirer = require ('inquirer')

function runquery() {
    return inquirer.Prompt (nextQuestions)
    .then((answers))  
        console.log(answers)
        return answers

    }
    runquery()

