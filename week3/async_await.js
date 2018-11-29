/**aync function has await keyword inorder to say wait for result
 * here i'm multiplying and summing in sequence done by aync await
 * */
function multiply(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 1000);
  });
}

async function additionAsync(x) {
  const a = await multiply(10);
 const b = await multiply(20);
 const c = await multiply(20);
  return x + a + b + c;
}


additionAsync(10).then((sum) => {
  console.log("The sum after sequence multiplication: "+sum);
});
/*
OUTPUT:
PS C:\Users\sai rachana\Desktop\nodejsprograms> node async_await.js
The sum after sequence multiplication: 110
*/
