/*var net = require('net');
var client = net.connect({port: 8080}, function() {
   console.log('connected to server!');  
});

client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});

client.on('end', function() { 
   console.log('disconnected from server');
});
function add()
{
   
   return a;
}
async function getTrace () 
{ 
let Content 
try { 
Content = await add();
 } 
catch (e) { console.error(e) } return Content 
} getTrace() .then()*/
var Q = require('q');

function async() {
    return Q.delay(4000)
}

async()
.then(function() {
    console.log('async called back');
});