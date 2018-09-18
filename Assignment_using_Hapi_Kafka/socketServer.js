'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');

const MongoDBUrl = 'mongodb://localhost:27017/aishu';
const Routes = require('./Routes/RoutesHapi.js')
var redis = require('socket.io-redis');


const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const product = require('./Factory/prod.js')
const Prod = require('./Model/product.js')

var Path = require('path');

/*
server.route({
        method: 'GET',
        path: '/hello',
        handler: (request, h) => {

            return h.file('./View/saleUI.html');
        }
    });
*/


server.route({
    method: 'GET',
    path: '/getDetails',
    //handler:product.getProdDetails

    handler: (request, h) => {
      // return product.getProdDetails
        //return "hi"
        //return h.file('./View/saleUI.html');

        return Prod.findOne({ "pid" : "aishu12345"}).select('total_qty sold_qty updated_at').exec().then((dog) => {
//return Prod.findOne({ "pid" : "aishu12345"}).exec().then((dog) => {
            console.log({ prod: dog })
            console.log(dog.total_qty)
            console.log('new_message', {
                bookqty: `${dog.sold_qty}`,
                remainingqty: `${dog.total_qty - dog.sold_qty}`,
                updatedat: `${dog.updated_at}`
            });
            io.sockets.emit('new_message', {
                bookqty: `${dog.sold_qty}`,
                remainingqty: `${dog.total_qty - dog.sold_qty}`,
                updatedat: `${dog.updated_at}`
            });
              return "Booked qty is "+`${dog.sold_qty}`+","+ "Remaining qty is "+`${dog.total_qty - dog.sold_qty}`+","+"Updated_At timing is " + `${dog.updated_at}`
            //return { prod: dog };
        }).catch((err) => {

            return { err: err };

        });

    }
});



server.route({
    method: 'GET',
    path: '/socketio',
    handler: (request, h) => {

        return h.file('./views/saleUI17.html');
    }
});


for (var route in Routes) {
    console.log(Routes[route])
    server.route(Routes[route]);
}

var io = require('socket.io')(server.listener);
io.adapter(redis({ host: 'localhost', port: 6379 }));
/*io.on('connection', function(client){
    console.log('New user connected')
    client.on('new_message', function(data){
        console.log("Data sent by client is : "+data.bookedQty ,data.RemainingQty ,data.UpdatedAt) //get the data sent by client
        io.sockets.emit('newmsg', {bookqty : data.bookedQty, remainingqty : data.RemainingQty, updatedat:data.UpdatedAt}); //send the data to client

    });
    //client.on('disconnect', function(){});
});

*/
(async () => {
    try {
        await server.start();
        await server.register(require('inert'));
        // Once started, connect to Mongo through Mongoose
        //mongoose.connect(MongoDBUrl, {}).then(() => { console.log(`Connected to Mongo server`) }, err => { console.log(err) });


        server.route({
            method: 'GET',
            path: '/hello',
            /*handler: (request, h) => {

                return h.file('./saleUI.html');
            }*/

            /*handler: {
                file: 'saleUI.html'
            }*/
            /*directory: {
                path: Path.join(__dirname, 'public/saleUI.html')
            }*/
            handler: (request, h) => {

                //return h.file(Path.resolve('public/saleUI.html'));
                directory: {
                    return h.file(Path.resolve(Path.resolve(__dirname, '.', 'public/saleUI.html')))
                }



            }
            /*handler: {
                file: Path.resolve('public/saleUI.html')
            }*/
        });

        mongoose.connect(MongoDBUrl,{ useNewUrlParser: true }).then(() => { console.log(`Connected to Mongo server`) }, err => { console.log(err) });
        console.log(`Server running at: ${server.info.uri}`);
    }
    catch (err) {
        console.log(err)
    }
})();


module.exports = server;


