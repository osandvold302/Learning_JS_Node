const fs = require('fs');

const fname = 'may_may_not_exist.txt';
// readFile is an asynchronous method
fs.readFile(fname, function(err, data) {
  if(err)
    return console.error(`error reading from ${fname}: ${err.message}`);
  console.log(`${fname} contents: ${data}`);
});
