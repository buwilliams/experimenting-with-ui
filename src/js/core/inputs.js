function inputs() {
  mouseEvents();
}

// Setup Event Listeners
function mouseEvents() {
  if(state.eventsListening === true) return;

  listenDragEvent();

  state.eventsListening = true;
}

function listenDragEvent() {
  $(document).mousedown(function(e) {
    state.mouseDown = true;
    state.mouseDownStart.x = e.pageX;
    state.mouseDownStart.y = e.pageY;
  });

  $(document).mouseup(function(e) {
    state.mouseDown = false;
    state.mouseDownEnd.x = e.pageX;
    state.mouseDownEnd.y = e.pageY;
  });

  $(document).mousemove(function(e) {
    if(state.mouseDown === true) {
      state.mouseDownCurrent.x = e.pageX;
      state.mouseDownCurrent.y = e.pageY;
    }
  })
}
