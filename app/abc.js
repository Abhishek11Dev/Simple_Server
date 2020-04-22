const redis = require("redis");
const client = redis.createClient();
//client.set("key",1, redis.print);
 
client.on("error", function(error) {
  console.error(error);
});
                              // redies dependency
var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    
     client.incr("count");
   // client.incr(redisData.val);
   console.log("-----------------")
   console.log("count of request in db")

    client.get("count", redis.print);
    console.log("-----------------")
    
    
      

	if (req.url == '/') { //check the URL of the current request
        
        // set response header
         
         client.get('count', function(err, reply) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<html><body><p>Welcome</p></body></html>');
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.write('<html><body><p></p></body></html>');
        res.write('<html><body><p>Total number of requests are </p></body></html>'+reply);
           // res.write(reply)
            res.end();
         });
    
    }
    else if (req.url == "/login") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is login Page.</p></body></html>');
        
        res.end();
        
    }
    else if (req.url == "/admin") {
        
       
        client.get('count', function(err, reply) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.write('<html><body><p>Total number of requests are </p></body></html>'+reply);
           // res.write(reply)
            res.end();
         });
    
   
    }
    else
    {
          
           res.end('Invalid Request!');
    }
    
});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
