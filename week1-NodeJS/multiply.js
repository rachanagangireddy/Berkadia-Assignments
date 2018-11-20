var multiply=1;
      numbers =process.argv.slice(2);
      numbers.forEach(function (value) {
        multiply =multiply*Number(value);
        return multiply;
         });
         console.log("the multiplication of numbers is:"+multiply); 
      