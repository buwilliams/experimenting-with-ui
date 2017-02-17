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
    state.mouseDownStart.x = e.pageX;
    state.mouseDownStart.y = e.pageY;
    state.mouseDown = true;
  });

  $(document).mouseup(function(e) {
    state.mouseDownEnd.x = e.pageX;
    state.mouseDownEnd.y = e.pageY;
    state.mouseDown = false;
  });

  $(document).mousemove(function(e) {
    if(state.mouseDown === true) {
      state.mouseDownCurrent.x = e.pageX;
      state.mouseDownCurrent.y = e.pageY;
    }
  })
}
