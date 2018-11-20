var n=process.argv[2];
 var arr=[];
 for (i = 1; i <=n; i++)
  {
    c = 0;
    for (j = 1; j <= i; j++) 
    {
        if ((i % j)== 0)
            c++;
    }
    if (c == 2)
        arr.push(i);
  }
console.log("The prime numbers upto "+n+" are :"+arr);