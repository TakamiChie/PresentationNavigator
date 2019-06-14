class StopWatch {
  status = 0; // 0=stop, 1=play, 2=pause
  innertimer = 0;
  lasttick = 0;
  start(){
    this.status = 1;
    this.innertimer = 0;
    this.lasttick = new Date().getTime();
  }

  pause(){
    this.status = 2;
    this.innertimer = this.innertimer +
      (new Date().getTime() - this.lasttick);
  }

  resume(){
    this.status = 1;
    this.lasttick = new Date().getTime();
  }

  stop(){
    this.status = 0;
    this.innertimer = this.innertimer +
      (new Date().getTime() - this.lasttick);
  }

  get time(){
    return this.innertimer +
      (
        this.status == 1 ?
        (new Date().getTime() - this.lasttick) : 0
      );
  }

  get time2string(){
    let ss = Math.floor(this.time / 1000);
    let m = ss / 60 | 0;
    let s = ss % 60;
    s = ('00' + s).slice(-2);
    return `${m}:${s}`;
  }
}
let sw = new StopWatch();

document.getElementById("sw_play").addEventListener("click", (e) => {
  t = "";
  switch (sw.status) {
    case 0:
      t = "&#x25A0;";
      sw.start();
      break;
    case 1:
      t = "&#x25B6;";
      sw.stop();
      break;
    default:
      // Not implemented yet
      break;
  }
  e.target.innerHTML = t;
  setTimeout(timeon, 100);
});

/* Not Implemented yet.
document.getElementById("sw_pause").addEventListener("click", (e) => {
  switch (sw.status) {
    case 0:
      // do nothing
      break;
    case 1:
      sw.pause();
      break;
    case 2:
      sw.resume();
      setTimeout(timeon, 100);
      break;
  }
  update_display();
});

document.getElementById("sw_stop").addEventListener("click", (e) => {
  sw.stop();
  update_display();
});
*/

function timeon(){
  update_display();
  if (sw.status == 1) {
    setTimeout(timeon, 100);
  }
}

function update_display() {
  let counter = document.getElementById("sw_counter");
  counter.textContent = sw.time2string;
}