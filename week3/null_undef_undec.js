/**
Undefined
It means a variable has been declared but has not yet been assigned a value

Null
It can be assigned to a variable to represent no value. It is an assignment value.

Undeclared
If a variable is not declared then the browser throws error.
*/
var a;
console.log(a); //undefined
console.log(typeof a); // undefined
var b = null;
console.log(b); //null
console.log(typeof b); //object
//undeclared
console.log(c);
/**OUTPUT:-------
 * PS C:\Users\sai rachana\Desktop\nodejsprograms> node null_undef_undec.js
undefined
undefined
null
object
C:\Users\sai rachana\Desktop\nodejsprograms\null_undef_undec.js:25
console.log(c);
ReferenceError: c is not defined
 */