//Program to merge 10 files synchronously using Sync functions

var fs = require('fs');//including fs module
  function append(file,appendingFile){
    var data=  fs.readFileSync(appendingFile,'utf8');
          //synchronous 
       //  console.log(data);
       //if you want to see the data in files remove above comment line
    fs.appendFileSync(file,data);
    //appendFileSync appends synchronously
        console.log('The data successfully appended!');//this line prints 10 times
      
}

//now call function append and check it by running.
append('message.txt','addition.js');
append('message.txt','prime.js');
append('message.txt','factorial.js');
append('message.txt','http.js');
append('message.txt','callback.js');
append('message.txt','maxmin.js');
append('message.txt','client.js');
append('message.txt','server.js');
append('message.txt','sort.js');
append('message.txt','subtract.js');
//appending 10 js files here
//output: 10 times The The data successfully appended!

