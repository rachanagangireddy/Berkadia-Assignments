//Program for addition of numbers using javascript
var total=0;  
  numbers =process.argv.slice(2);
  numbers.forEach(function (a) {
     total +=Number(a);
     return total;
      });
      console.log('addition is:'+total);