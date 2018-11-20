var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
     resolve('Hello Berkadia');
    }, 300);
  });
  
  promise1.then(function(value) {
    console.log(value);
    // expected output: "Hello Berkadia"
  });
  