var Lab = require("lab"),
    server = require("../server.js"),
    Code = require('code')

var lab = exports.lab = Lab.script();
lab.experiment('test cases', function() {
lab.test('GET all products', function(done) {
        var options = {
            method: "GET",
            url: '/getProds',
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



lab.test('GET product by id', function(done) {
        var options = {
            method: "GET",
            url: '/prodById/{id}',
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

lab.test('POST insert product', function(done) {
        var options = {
            method: "POST",
            url: '/prodInsert',
	    payload:{"pid" : "aishu12345", "title" : "Mobile moto g4+", "ptype" : "Electronics", "price" : 1000, "prod_desc_attributes" : { "year" : "2000", "cpu" : "test17", "power" : "75 RMS" }, "total_qty" : 50000, "sold_qty" : 211 }


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


lab.test('PUT product by title', function(done) {
        var options = {
            method: "PUT",
            url: '/updateProd/{id}',
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



lab.test('DELETE product by title', function(done) {
        var options = {
            method: "DELETE",
            url: '/deleteProd/{id}',
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



