console.log('Before timeout: ' + new Date());
// in this example, setTimeout will 'call'/invoke console log once
// the time has passed and allow the last 2 logs to occur while it waits
setTimeout(function() { 
  console.log('After timeout: ' + new Date());
}, 1*1000); // 1 seconds
console.log('Written after setTimeout');
console.log('Written after log and setTimeout');

// this second example uses setInterval to doSomething multiple times
// setTimeout will invoke function once
const start = new Date();
let i = 0;
const intervalId = setInterval( function() {
  let now = new Date();
  if(now.getMinutes() !== start.getMinutes() || ++i >10)
    return clearInterval(intervalId);
  console.log(`${i}: ${now}`);
}, 5*1000);
