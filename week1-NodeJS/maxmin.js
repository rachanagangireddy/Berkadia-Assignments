var num1=process.argv[2];
var max=num1;
var min=num1;
numbers =process.argv.slice(2);
numbers.forEach(function(val)
{
  if((val>max))
      max=val;       
   if(val<min)
    min=val;
});         
console.log("the maximum element is: "+max);
console.log("the minimum element is: "+min);
