var state = {
  running: true,
  mouseDown: false,
  mouseDownStart: { x: -1, y: -1 },
  mouseDownEnd: { x: -1, y: -1 },
  mouseDownDistance: { width: 0, height: 0 },
  box: {
    id: 'box-1',
    className: 'box',
    width: 300,
    height: 300,
    displayHandles: false,
    handle : {
      className: 'handle',
      height:  10,
      width: 10
    }
  }
};

function inputs() {
  if(state.mouseDown !== true) {
    if(state.mouseDownStart.y !== -1) {
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
      state.box.width = width;
      state.box.height = height;

      // reset the state
      state.mouseDownStart.y = -1;
      state.mouseDownStart.x = -1;
      state.mouseDownEnd.y = -1;
      state.mouseDownEnd.x = -1;
    }
  }
}

function update() {

}

function getStyles(obj) {
  var out = 'style="';
  Object.keys(obj).forEach(function(key) {
    var val = obj[key];
    if(typeof val === "number") {
      out += key+": "+val+"px; ";
    } else {
      out += key+": "+val+"; ";
    }
  })
  out += '"';
  return out;
}

function render() {
  var content = $('#canvas');

  // 1. Clear the canvas
  content.empty();

  // 2. Draw the box
  var styles = getStyles({ width: state.box.width, height: state.box.height });
  var box = $(`<div id="${state.box.id}"
                  class="${state.box.className}"
                  ${styles}></div>`);

  // 3. TODO: Draw the handles
  var handles = $(renderHandles(state.box));
  box.append(handles);

  // Write content to DOM
  content.append(box);
}

function renderHandles(box) {
  var handles = $('<div></div>');

  // top left
  handles.append(renderHandle(
    box.handle,
    0 - (box.handle.width / 2), // top
    0 - (box.handle.width / 2) // left
  ));

  // top mid
  handles.append(renderHandle(
    box.handle,
    0 - (box.handle.width / 2), // top
    (box.width / 2) - (box.handle.width / 2) // left
  ));

  // top right
  handles.append(renderHandle(
    box.handle,
    0 - (box.handle.width / 2), // top
    box.width - (box.handle.width/2) // left
  ));

  // mid left
  handles.append(renderHandle(
    box.handle,
    (box.height/2) - (box.handle.width / 2), // top
    0 - (box.handle.width/2) // left
  ));

  // mid right
  handles.append(renderHandle(
    box.handle,
    (box.height/2) - (box.handle.width / 2), // top
    box.width - (box.handle.width/2) // left
  ));

  // bottom left
  handles.append(renderHandle(
    box.handle,
    box.height - (box.handle.width / 2), // top
    0 - (box.handle.width / 2) // left
  ));

  // bottom mid
  handles.append(renderHandle(
    box.handle,
    box.height - (box.handle.width / 2), // top
    (box.width / 2) - (box.handle.width / 2) // left
  ));

  // bottom right
  handles.append(renderHandle(
    box.handle,
    box.height - (box.handle.width / 2), // top
    box.width - (box.handle.width/2) // left
  ));



  return handles;
}

function renderHandle(handle, top, left) {
  var styles = getStyles({
    position: 'absolute',
    top: top,
    left: left,
    width: handle.width,
    height: handle.height
  });

  var handle = `<div class="${handle.className}" ${styles}></div>`;
  return handle;
}

function loop() {
  //console.log('loop');
  if(state.running) {
    //console.log('loop 2');
    inputs();
    update();
    render();
  }
  setTimeout(function() {
    loop();
  }, 100);
}

$(document).mousedown(function(e) {
  // record start position
  state.mouseDown = true;
  state.mouseDownStart.x = e.pageX;
  state.mouseDownStart.y = e.pageY;
});

$(document).mouseup(function(e) {
  // record the end position
  state.mouseDown = false;
  state.mouseDownEnd.x = e.pageX;
  state.mouseDownEnd.y = e.pageY;
});
