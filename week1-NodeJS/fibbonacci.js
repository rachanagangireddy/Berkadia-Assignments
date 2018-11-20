//Program to print fibonacci numbers
function fibonacci(num) {
    var arr = [0,1];
    for (var i = 2; i <= num; i++) {
      arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
  }
  var a=process.argv[2]-1;
 console.log(fibonacci(a));
 /** output:
  execute using node fibbonacci.js 5
  outputs: [0, 1, 1, 2, 3]
  */