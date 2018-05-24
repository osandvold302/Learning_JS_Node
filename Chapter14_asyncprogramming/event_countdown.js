const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
  constructor(seconds,superstitious){
    super();
    this.seconds = seconds;
    this.superstitious = !! superstitious;
  }

  go() {
    const countdown = this;
    const timeoutIds = [];
    return new Promise( function(res,rej) {
      for (let i = countdown.seconds; i >=0 ; i--) {
        timeoutIds.push(setTimeout( function() {
          if (countdown.superstitious && i===13){
            timeoutIds.forEach(clearTimeout);
            return rej(new Error('Bad luck!'));
          }
          countdown.emit('tick', i);
          if (i===0) res();
        },(countdown.seconds-i)*1000));
      }
    });
  }
}

function launch() {
  return new Promise( function(res,rej) {
    console.log('Lift off');
    setTimeout(function() {
      res('In orbit');
    }, 2*1000);
  });
}

const c = new Countdown(10,false);

c.on('tick', function(i) {
  if(i>0) console.log(i + '...');
});

c.go()
  .then(launch)
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.error(err.message);
  })
