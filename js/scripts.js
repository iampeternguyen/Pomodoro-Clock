var time = {
  min:0,
  sec:0,
  work:25,
  break: 5,
  set: function (x) {this.min = x;},
  start: function () {var x = setInterval(countDown.bind(time), 1000);}
};

function countDown () {
  console.log(this.min);
  console.log(this.sec);
  this.sec--;
  if (this.sec < 0 && this.min === 0) {clearInterval(x);}
  if (this.sec < 0 && this.min >0)
  {
    this.sec = 59;
    this.min--;
  }
}

// run the timer
time.set(time.break);
time.start();
//TODO create function to increase and decrease break and work time.
//TODO create function to set and then run the timer when user is ready
//TODO bonus create pause resume function
