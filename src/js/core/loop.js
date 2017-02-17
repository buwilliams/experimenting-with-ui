function loop(fps) {
  if(state.running) {
    inputs();
    update();
    render();
  }
  setTimeout(function() {
    loop();
  }, 1000/fps);
}
