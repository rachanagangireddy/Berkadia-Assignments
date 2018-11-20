//Factorial 
var i, n,fact;
fact=1;
n=process.argv[2];
for(i=1; i<=n; i++)  
{
fact= fact*i;
} 
console.log("The factorial of the number "+n+" is:"+fact);
