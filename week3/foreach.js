var Stud_data = {
    "Students": [{
        "name": "Rachna",
        "branch": "CSE"
    }, {
        "name": "Gopi",
        "branch": "CSE"
    }]
};
Stud_data.Students.forEach(function(message) {
    console.log(message);
   
});

/*
Output:==
PS C:\Users\sai rachana\Desktop\nodejsprograms> node foreach.js
{ name: 'Rachna', branch: 'CSE' }
{ name: 'Gopi', branch: 'CSE' }
*/