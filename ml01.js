var Algorithmia = require("algorithmia");
const algorithmiaApiKey = require("./credentials/algoritmia.json").apikey


var resposta = ''

var input = "aalves";
Algorithmia.client(algorithmiaApiKey)
  .algo("aalves/Hello/0.1.0?timeout=300") // timeout is optional
  .pipe(input)
  .then(function(response) {
    console.log(response.get());
  });

