/**
 * The following function does not work as the above example
 * The var i will lose scope when the setTimeout function is invoked
 * Expect 5,4,3,2,1 go; will see -1 -1 -1 -1 -1 -1
 */
var i;
for(i=5; i>=0; i--) {
  setTimeout(function() {
    console.log(i===0 ? 'go' : i);
  }, (5-i)*1000);
}
/**
 *  The following code should print out 5,4,3,2,1 in order
 *  'go' will be printed after 5 seconds and after the numbers
 */ 
function loopBody(i){
  // increase timeout time to avoid conflict with previous function
  setTimeout(function() {
    console.log(i===0 ? 'go' : i);
  }, (6+5-i)*1000);
}

setTimeout(function() {
  console.log('This will print after 6 seconds');
},6000);

var i;
for(i=5; i>0; i--) {
  loopBody(i);
}

/**
 *  We can also use an anon function to perform the same example above
 */
var i;
for(i=5;i>0;i--) {
  // creation of anonymous function creates a new scope with i as a
  // static value
  (function(i) {
    setTimeout( function() {
      console.log(i===0 ? 'go' : i);
    }, (6+6+5-i));
  })(i);
}
