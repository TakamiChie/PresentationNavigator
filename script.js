class ScriptViewer{
  scripts = [];
  counter = 0;

  add(text){
    this.scripts.push(text);
    this.counter = 0;
  }

  clear(){
    this.scripts = [];
    this.counter = 0;
  }

  next(increment){
    let next = this.counter + 1;
    if(increment && next < this.scripts.length){
      this.counter = next;
    }
    return next < this.scripts.length ?
      this.scripts[next] :
      "";
  }

  previous(increment){
    let next = this.counter - 1;
    if(increment && next >= 0){
      this.counter = next;
    }
    return next >= 0 ?
      this.scripts[next] :
      "";
  }

  get current(){
    return this.scripts[this.counter];
  }
}

let scr = new ScriptViewer();
scr.add("test");
scr.add("test1");
scr.add("test2");
scr.add("test3");
scr.add("test4");

view_text(scr.current);

document.getElementById("scr_prev").addEventListener("click", (e) => {
  view_text(scr.previous(true));
});

document.getElementById("scr_next").addEventListener("click", (e) => {
  view_text(scr.next(true));
});

document.getElementById("scr_view").addEventListener("dblclick", (e) => {
  let dlg = document.getElementById("dlg_edit");
  dlg.showModal();
});

document.getElementById("edit_ok").addEventListener("click", (e) => {
  let dlg = document.getElementById("dlg_edit");
  dlg.close();
});

document.getElementById("edit_cancel").addEventListener("click", (e) => {
  let dlg = document.getElementById("dlg_edit");
  dlg.close();
});

function view_text(text){
  let view = document.getElementById("scr_view");
  view.textContent = text;
}