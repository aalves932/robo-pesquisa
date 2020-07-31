var Algorithmia = require("algorithmia");

var resposta = ''

var input = "aalves";
Algorithmia.client("simJipMaD0Go0+au8vYpaScVeGQ1")
  .algo("aalves/Hello/0.1.0?timeout=300") // timeout is optional
  .pipe(input)
  .then(function(response) {
    console.log(response.get());
  });

  //var input = "data://barcode/GeneratedQRCodes/AZTECTest.png";
  var input = "data://aalves/Images/IMG_1592.jpg"
  Algorithmia.client("simJipMaD0Go0+au8vYpaScVeGQ1")
    .algo("barcode/BarcodeReader/0.1.1?timeout=1000") // timeout is optional
    .pipe(input)
    .then(function(response) {
      resposta = response;  
      console.log(response.get());
    }); 
    
    a=1