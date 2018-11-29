var person={
   data:[{ name:'rachna',branch:'CSE'},{name:'radha',branch:'ECE'}

]};

for (var data in person) {
 console.log("data" ,': :', person[data]);
}
/*
output:
PS C:\Users\sai rachana\Desktop\nodejsprograms> node forin.js
data : : [ { name: 'rachna', branch: 'CSE' },
  { name: 'radha', branch: 'ECE' } ]
  */