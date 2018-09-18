var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
//var server = require('./server.js')

if (cluster.isMaster) {

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

// When a worker dies create another one
  cluster.on('exit', function(worker) {
    console.log('worker ' + worker.id +  ' died');
    cluster.fork();
  });


} else {

if (cluster.isWorker) {
  //console.log('I am a worker');
   console.log('worker with pid is' + process.pid);

    //change this line to Your Node.js app entry point.

     // require("./server.js");
    require("./socketServer.js");
}

}
