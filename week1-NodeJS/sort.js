function Sort(arr){
    var l = arr.length;
    for (var i=l-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(Number(arr[j-1])>Number(arr[j])) {
            var t = Number(arr[j-1]);
            arr[j-1] =Number(arr[j]);
            arr[j] = t;
         }
      }
    }
    return arr;
 }
 console.log(Sort(process.argv.slice(2)));