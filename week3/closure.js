//You create a closure by adding a function inside another function.
//A Basic Example of Closures in JavaScript:
function showName (firstName, lastName) {
var nameIntro = "My name is ";
function makeFullName () {
console.log(nameIntro + firstName + " " + lastName);
return; 
 };
return makeFullName ();
};
showName ("Rachna", "reddy"); 

/*
output:PS C:\Users\sai rachana\Desktop\nodejsprograms> node closure.js
My name is Rachna reddy
*/