/**
 Call invokes the function and allows you to pass in arguments one by one.
Apply invokes the function and allows you to pass in arguments as an array.
Bind returns a new function, allowing you to pass in a this array and 
any number of arguments.
 */

var person1 = {firstName: 'Rachna', lastName: 'Reddy'};
var person2 = {firstName: 'Anand', lastName: 'Kaifel'};

function say(greet) {
    console.log(greet + ' ' + this.firstName + ' ' + this.lastName);
}
//call
say.call(person1, 'Hello'); 
say.call(person2, 'Hello'); 
//Call and apply are pretty interchangeable.
// Just decide whether it’s easier to send in an array or a comma separated list of arguments.

//apply
say.apply(person2, ['Hello']); 

//bind
function saybind() {
    console.log('Hello bind ex ' + this.firstName + ' ' + this.lastName);
}
var sayRachna = saybind.bind(person1);
sayRachna();
/**
 * output::=
 PS C:\Users\sai rachana\Desktop\nodejsprograms> node apply_bind_call.js
Hello Rachna Reddy
Hello Anand Kaifel
Hello Anand Kaifel
Hello bind ex Rachna Reddy
 */
