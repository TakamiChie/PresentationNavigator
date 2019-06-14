class ScriptViewer{
  scripts = [];
  counter = 0;

  add(text){
    this.scripts.push(text);
    this.counter = 0;
  }

  get next(){
    this.counter++;
    return this.counter < this.scripts.length ?
      this.scripts[counter] :
      "";
  }

  get previous(){
    counter++;
    return this.counter >= 0 ?
      this.scripts[counter] :
      "";
  }
}

