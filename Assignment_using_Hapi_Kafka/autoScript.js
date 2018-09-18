var request = require("request");
var faker = require('faker')
var cnt=1111
var i

allRequests = []
var temp = [
            "9089",
            "aishu12345",
            "8003",
            "aishu12345",
            "7001",
            "aishu12345",
            "8077",
            "aishu12345",
            "7077",
            "aishu12345",
            "9077dsdfsgfg",
            "aishu12345",
        ]

for(i=0; i<(temp.length-1); i=i+2)
{
console.log("temp values are")
console.log(temp[i])
console.log(temp[i+1])
request({
  uri: "http://localhost:3000/bookCustProd/",
  method: "POST",
  form: { 

    cid: temp[i],
    pid: temp[i+1]
    

  }
}, function(error, response, body) {
  console.log(body);
});
}


console.log("all req")
console.log(allRequests)

