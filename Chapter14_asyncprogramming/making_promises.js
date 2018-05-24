function countdown(seconds) {
  return new Promise(function(res,rej){
    for(let i = seconds; i>=0; i--) {
      setTimeout(function() {
        if(i===13) return rej(new Error('CANNOT COUNT 13'));
        if(i>0) console.log(i + '...');
        else res(console.log('GO!'));
      }, (seconds-i)*1000);
    }
  });
}

// call the function countdown and do something with returned promise
countdown(20).then(
  function() {
    console.log('countdown was successful');
  },
  function(err) {
    console.log('countdown encountered error: ' + err.message);
  }

);
