var Lab = require("lab"),
    server = require("../server.js"),
    Code = require('code')

var lab = exports.lab = Lab.script();
lab.experiment('test cases', function() {
lab.test('GET all products', function(done) {
        var options = {
            method: "GET",
            url: '/GetAllUpdatedProd',
            //payload : TestCredentials.jira_issue_payload,
            //headers : TestCredentials.header
        };

        server.inject(options, function(response) {
            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response).to.be.instanceof(Object);
            //Code.expect(response).to.be.instanceof(JSON);
            done();
        });
    });




lab.test('POST insert product', function(done) {
        var options = {
            method: "POST",
            url: '/bookCustProd/',
	    payload:{"pid" : "aishu12345", "cid": "C1234" }

            //payload : TestCredentials.jira_issue_payload,
            //headers : TestCredentials.header
        };

        server.inject(options, function(response) {
            console.log("response is "+response)
            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response).to.be.instanceof(Object);
            //Code.expect(response).to.be.instanceof(JSON);

            done();
        });
    });

});



