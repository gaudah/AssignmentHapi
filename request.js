var request = require("request");
var faker = require('faker')

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

setInterval(function() {
var custId = (parseInt(getRndInteger(15071,16050))).toString()
var prodId = "aishu12345"
console.log("custId"+custId)
request({
  uri: "http://localhost:3000/bookCustProd/",
  method: "POST",
  form: {
  pid: prodId,
  cid: custId
 }
}, function(error, response, body) {
  console.log(body);
});
}, 10);



