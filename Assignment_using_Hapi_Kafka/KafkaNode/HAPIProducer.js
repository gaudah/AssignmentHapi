var faker = require('faker')
var express = require('express');
var kafka = require('kafka-node');

const mongoose = require('mongoose');
const MongoDBUrl = 'mongodb://localhost:27017/aishu';

const Hapi = require('hapi');


const server = Hapi.server({
    port: 3001,
    host: 'localhost'
});



var Producer = kafka.Producer,
    client = new kafka.Client(),
    producer = new Producer(client);

producer.on('ready', function () {
    console.log('Producer is ready');
});

producer.on('error', function (err) {
    console.log('Producer is in error state');
    console.log(err);
})


server.route({
  method: 'GET',
  path: '/checkproducer',
  handler: (req,h) => {
  //h.response({greeting:'Kafka Producer'})
    return {greeting:'Kafka producer'}
}
})


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


var storeRes= []

server.route({
  method: 'GET',
  path: '/sendPayload',
  handler: (req,h) => {
var custId = (parseInt(getRndInteger(9011,9025))).toString()
      var prodId = "aishu12345"


    payloads = [
          { topic: "cidpid",  messages: [custId,prodId] , partition: 0 }

    ];
    producer.send(payloads, function (err, data) {
             storeRes.push(data)
		console.log(data)
    });
console.log("RES")
console.log(storeRes)
return {result:storeRes}
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
       



