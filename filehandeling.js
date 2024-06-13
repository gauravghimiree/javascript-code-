const fns = require('node:fs/promises');
 fns.writeFile('gaurav.txt','hello Iam gaurav and iam happy')
   .then(()=>console.log('written succesfully'))
   .catch((err)=>console.log('error to write the file'))
   fns.readFile('gaurav.txt','utf-8')
   .then((data)=>console.log('read succesfully'))
   .catch((err)=>console.log('error to read the file'));