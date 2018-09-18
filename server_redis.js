'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');

var redis = require('redis');
var client = redis.createClient(); //creates a new client

const MongoDBUrl = 'mongodb://localhost:27017/aishu';
const Routes = require('./Routes/RoutesHapi.js')

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

client.on('connect', function() {
    console.log('connected');
});
//client.set('framework', 'AngularJS');

client.set('framework', 'AngularJS', function(err, reply) {
    console.log("Inside set of redis")
    console.log(reply);
});

client.get('framework', function(err, reply) {
    console.log("Inside get of redis")
    console.log(reply);
});


client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');

client.hgetall('frameworks', function(err, object) {
    console.log("Inside hgetall of redis")
    console.log(object);
});


client.hmset('frameworksObject', {
    'javascript': 'AngularJS',
    'css': 'Bootstrap',
    'node': 'Express'
});


client.hgetall('frameworksObject', function(err, object) {
    console.log("Inside hgetall Object of redis")
    console.log(object);
})

client.rpush(['frameworksList1', 'angularjs', 'backbone'], function(err, reply) {
    console.log("Inside rpush of list of redis")
    console.log(reply); //prints 2
});

client.lrange('frameworksList1', 0, -1, function(err, reply) {
    console.log("Inside set of list of redis")
    console.log(reply); // ['angularjs', 'backbone']
});


client.sadd(['tags', 'angularjs', 'backbonejs', 'emberjs','angularjs'], function(err, reply) {
    console.log("Inside sadd of set of redis")
    console.log(reply); // 3
});

client.smembers('tags', function(err, reply) {
    console.log("Inside smembers of set of redis")
    console.log(reply);
});


client.exists('key', function(err, reply) {
    if (reply === 1) {
        console.log('exists');
    } else {
        console.log('doesn\'t exist');
    }
});

client.del('frameworks', function(err, reply) {
    console.log("Inside del of redis")
    console.log(reply);
});

client.set('key1', 'val1');
client.expire('key1', 30);

client.set('key1', 10, function() {
    client.incr('key1', function(err, reply) {
        console.log("Inside incr of redis")
        console.log(reply); // 11
    });
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, h) => {

        return h.file('./View/saleUI.html');
    }
});


for (var route in Routes) {
    console.log(Routes[route])
    server.route(Routes[route]);
}


(async () => {
    try {
        await server.start();
        await server.register(require('inert'));
        // Once started, connect to Mongo through Mongoose
        //mongoose.connect(MongoDBUrl, {}).then(() => { console.log(`Connected to Mongo server`) }, err => { console.log(err) });

        mongoose.connect(MongoDBUrl,{ useNewUrlParser: true }).then(() => { console.log(`Connected to Mongo server`) }, err => { console.log(err) });
        console.log(`Server running at: ${server.info.uri}`);
    }
    catch (err) {
        console.log(err)
    }
})();


module.exports = server



