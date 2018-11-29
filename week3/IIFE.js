/** IIFE program:Immediately invoking function ,no need of calling ,itself executes
It executes immediately after it’s created.
if for example the IIFE is inside a function then it won't be executed
 until the function is called.
*/
(function(){
const msg='HAI HELLO BERKADIA';
console.log(msg);
})();

/* OUTPUT:
PS C:\Users\sai rachana\Desktop\nodejsprograms> node IIFE.js
HAI HELLO BERKADIA
*/