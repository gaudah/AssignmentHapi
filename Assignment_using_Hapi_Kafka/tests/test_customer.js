var Lab = require("lab"),
    server = require("../server.js"),
    Code = require('code')

var lab = exports.lab = Lab.script();
lab.experiment('test cases', function() {
lab.test('GET all customers', function(done) {
        var options = {
            method: "GET",
            url: '/getCusts',
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



lab.test('GET customer by id', function(done) {
        var options = {
            method: "GET",
            url: '/custById/{id}',
            //payload : TestCredentials.jira_issue_payload,
            //headers : TestCredentials.header
        };

        server.inject(options, function(response) {
            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response).to.be.instanceof(Object);
            //Code.expect(response).to.be.instanceof(JSON);
            done();
    });
})

lab.test('POST insert customer', function(done) {
        var options = {
            method: "POST",
            url: '/custInsert',
	    payload:{
		"cid": "C2134",
		"firstName": "bhai",
 		"lastName": "gaud",
 		"company": "avlara",
  		"connectInfo": {
        		"tel": [12345,67890],
        		"email": ["me@a.com","you@a.com"],
        		"address": {
            			"city": "x",
            			"street": "y",
            			"houseNumber": "x-1"
        		}
    			},

  		"product":"ab1234",
  		"isBooked":false
		}

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


lab.test('PUT customer by firstName', function(done) {
        var options = {
            method: "PUT",
            url: '/updateCust/{id}',
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



lab.test('DELETE customer by firstName', function(done) {
        var options = {
            method: "DELETE",
            url: '/deleteCust/{id}',
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









});



