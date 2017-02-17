function update() {
  updateDrag();
}

function updateDrag() {
  if(state.mouseDown === true) {
    resizeDragbox();
    //console.log(state.dragBox.width, state.dragBox.height);
  } else if(state.mouseDown === false && state.mouseDownStart.y !== -1) {
    console.log('mouse up');
    resizeMainBox();
    clearDrag();
  }
}

function resizeDragbox() {
  var distanceX = Math.abs(state.mouseDownCurrent.x - state.mouseDownStart.x);
  var distanceY = Math.abs(state.mouseDownCurrent.y - state.mouseDownStart.y);

  if(distanceX >= state.dragBox.minDistance.x && distanceY >= state.dragBox.minDistance.y) {
    state.dragBox.x = state.mouseDownStart.x;
    state.dragBox.y = state.mouseDownStart.y;
    state.dragBox.width = distanceX;
    state.dragBox.height = distanceY;
    state.dragBox.render = true;
  }
}

function resizeMainBox() {
  // Calculate the distance
  var width, height;
  if(state.mouseDownEnd.x > state.mouseDownStart.x) {
    width = state.mouseDownEnd.x - state.mouseDownStart.x;
  } else {
    width = state.mouseDownStart.x - state.mouseDownEnd.x;
  }

  if(state.mouseDownEnd.y > state.mouseDownStart.y) {
    height = state.mouseDownEnd.y - state.mouseDownStart.y;
  } else {
    height = state.mouseDownStart.y - state.mouseDownEnd.y;
  }

  // Update the box width & height
  if(width > state.dragBox.minDistance.x && height > state.dragBox.minDistance.x) {
    state.boxes[state.mainBox].width = width;
    state.boxes[state.mainBox].height = height;
  }
}

function clearDrag() {
  // reset the state
  state.mouseDownStart.y = -1;
  state.mouseDownStart.x = -1;
  state.mouseDownEnd.y = -1;
  state.mouseDownEnd.x = -1;
  state.mouseDownCurrent.y = -1;
  state.mouseDownCurrent.x = -1;

  // reset dragbox
  state.dragBox.render = false;
  state.dragBox.y = -1;
  state.dragBox.x = -1;
  state.dragBox.width = -1;
  state.dragBox.height = -1;
}
