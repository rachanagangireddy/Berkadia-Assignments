 //Program demonstrating callbacks 
 var fs= require('fs');
     fs.readFile('file1.txt',function(err,data){
     if(err)
      return console.error(err);
    console.log(data.toString());
});
console.log('program for callbacks');

/*output::=
program for callbacks
hello i'm file1*/