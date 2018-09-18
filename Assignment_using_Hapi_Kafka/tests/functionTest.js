
const { expect } = require('code');
//const { lab } = exports.lab = require('lab').script();
const Lab = require('lab');
const lab = exports.lab = Lab.script();

_ = require('lodash'),

/*
lab('returns true when 1 + 1 equals 2', () => {

    expect(1 + 1).to.equal(2);
});
*/


    lab.test('returns true when 1 + 1 equals 2', () => {

        console.log("came into firstTest")
        expect(1 + 1).to.equal(2);
    });


const summ = (a,b) => { return (a+b)}

const difff = (a,b) => { return (a-b)}

const multi = (a,b) => { return (a*b)}

const maxi = (a,b) => {
    if(a>b)
        return {a:a}
    else
        return {b:b}
}



const result = summ(7,5)
console.log("summation is "+result)

const checkNumber = (a) => {return _.isNumber(a)}


lab.test('returns true when 7 + 4 equals 11', () => {

console.log("came into second test")
    expect(checkNumber(7)).to.equal(true);
    expect(checkNumber(4)).to.equal(true);
    //expect(summ(7,4)).to.equal(11);
    expect(summ(7,4)).to.equal(11);
});

/*
lab('returns true when 7 + 4 equals 11', () => {


    expect(checkNumber(7)).to.equal(true);
    expect(checkNumber(4)).to.equal(true);
    //expect(summ(7,4)).to.equal(11);
    expect(summ(7,4)).to.equal(11);
});*/


lab.experiment('math', () => {

    lab.before(() => {

        return new Promise((resolve) => {

            // Walab 1 second
            setTimeout(() => {

                resolve();
            }, 1000);
        });
    });

    lab.beforeEach(() => {

        console.log("welcome in beforeEach()")
        // Run before every single test
    });
    lab.afterEach(() => {

        console.log("welcome in afterEach()")
        // Run before every single test
    })

    lab.test('returns true when 1 + 1 equals 2', () => {
        console.log("came into inside test of env")
        expect(1 + 1).to.equal(2);
    });

    lab.before(() => {

        console.log("came into before()")
        expect(checkNumber(7)).to.equal(true);
        expect(checkNumber(4)).to.equal(true);
        //expect(summ(7,4)).to.equal(11);
        expect(summ(7,4)).to.equal(11);

        return summ(9,9)
      //  return aFunctionReturningAPromise();
    });

    lab.after(() => {

        console.log("came into after()")

        expect(checkNumber(9)).to.equal(true);
        expect(checkNumber(5)).to.equal(true);
        //expect(summ(7,4)).to.equal(11);
        expect(difff(9,5)).to.equal(4);
        return difff(9,5)
        //  return aFunctionReturningAPromise();
    });


    lab.test('returns true when 1 + 1 equals 2', () => {

        //return aFunctionReturningAPromise()
           /*return maxi(11,7)
            .then((aValue) => {
                console.log("came in maxi")
                expect(aValue).to.equal(11);
            });*/
        console.log("came in maxi")

        expect(checkNumber(7)).to.equal(true);
        expect(checkNumber(4)).to.equal(true);
        expect(maxi(11,7)).to.equal({a:11});
           return maxi(11,7)
    });


    lab.before(({ context }) => {

        console.log("assign the value to context ")
        context.foo = 'bar';
    })

    lab.test('contains context', ({ context }) => {
        console.log("now check the value of context defined earlier in this testcase")
        expect(context.foo).to.equal('bar');
    });


});

/*
// If we allow below testcase then remaining testcases won't get executed
lab.experiment('with only', () => {

    lab.test.only('only this test will run', () => {

        console.log("Only this test will get executed")
        expect(1 + 1).to.equal(2);
    });

    lab.test('another test that will not be executed', () => {console.log("this another test won't get executed")});
});
*/





/*var Lab = require("lab"),
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
            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response).to.be.instanceof(Object);
            //Code.expect(response).to.be.instanceof(JSON);
            done();
        });
    });

});



*/
