//setInterval
var interval = setInterval(function () { 
    console.log('second passed'); 
},1000);
//continuously prints until you  stop it 
//to stop execution use clear interval function


//setTimeout sets up a function to be called after a specified delay in milliseconds.
var time=setTimeout(function () {
    console.log('timeout completed'); 
},1000); 
//after 1000 millisecs this is printed


//setImmediate

var immediate=setImmediate(function(){
    console.log("SETIMMEDIATE");//immediately prints
});
        