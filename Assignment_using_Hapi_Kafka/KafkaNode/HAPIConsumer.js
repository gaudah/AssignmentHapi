'use strict';

var request = require("request");
const Hapi = require('hapi');
const mongoose = require('mongoose');

const MongoDBUrl = 'mongodb://localhost:27017/aishu';

const server = Hapi.server({
    port: 3002,
    host: 'localhost'
});


var result=[]
var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client(),
    consumer = new Consumer(client,
        [{ topic: 'cidpid', offset: 0}],
        {
            autoCommit: false
        }
    );
consumer.on('message', function (message) {
    console.log(message);
    result.push(message.value)
});

console.log("success")
console.log(result)

consumer.on('error', function (err) {
    console.log('Error:',err);
})

consumer.on('offsetOutOfRange', function (err) {
    console.log('offsetOutOfRange:',err);
})


server.route({
  method: 'GET',
  path: '/checkconsumer',
  handler: (req,h) => {
  h.response({greeting:'Kafka Consumer'})
  
}
})


server.route({
  method: 'GET',
  path: '/consumePayload',
  handler: (req,h) => {
  var store = ({result})
  //res.send(store)
  // h.response(store)
    return {store:store}
  }
});


var allRequests=[]
server.route({
  method: 'GET',
  path: '/handleRequest',
  handler: (req,h) => {

console.log("Only result")
console.log(result)

var temp = result
console.log(temp)
var i

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
  console.log(response)
  allRequests.push(body)
});
}
   return {msg:"Requests handled successfully"}

}
});

console.log("all requests")
console.log(allRequests)

server.route({
  method: 'GET',
  path: '/getAllRequests',
  handler: (req,h) => {
   return {Result:allRequests}
}
});



(async () => {
  try {
    await server.start();
    // Once started, connect to Mongo through Mongoose
    mongoose.connect(MongoDBUrl, {}).then(() => { console.log(`Connected to Mongo server`) }, err => { console.log(err) });
    console.log(`Server running at: ${server.info.uri}`);
  }
  catch (err) {
    console.log(err)
  }
})();
















