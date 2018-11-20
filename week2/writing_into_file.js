var fs = require('fs');
//create a file named newfile.txt:
fs.writeFile('newfile.txt', 'Hello berkadia!', function (err) 
{
  if (err) throw err;
  console.log('Saved!'); 
});
/** save vth .js and execute
 it create a newfile if not exists and writes else overwrites
open newfile.txt and check the content it will have Hello berkadia! 
*/