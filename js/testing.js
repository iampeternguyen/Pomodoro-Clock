var time = {min:5, sec:0 };
var x = setInterval(countDown.bind(time), 1000);

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



//TODO re-read about this statements to understand how to use them.
