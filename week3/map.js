/*//map, reduce, filter
var arr = [1, 4, 9, 16];

// pass a function to map
const map1 = arr.map(x => x * 10 );

console.log(map1);
*/
var arr = [
  { id: 1, name: 'rachna',marks:20 },
  { id: 2, name: 'Phani',marks:30 },
  { id: 3, name: 'Reeni',marks:20 },
  { id: 4, name: 'Renie',marks:30 }
];

// or using ES6 syntax
var ids1 = arr.map(arr => {  return arr.id} );
console.log(ids1);

//reduce
var total_mrk=arr.reduce((accumulator,arr)=>
{
    return accumulator+arr.marks;
},0);
console.log(total_mrk);

//filter
var score1 = arr.filter(newarr =>  newarr.marks === 20 );
console.log(score1);