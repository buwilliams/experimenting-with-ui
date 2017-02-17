function render() {
  if(typeof state.el === "string") state.el = $(state.el);

  // 1. Clear the canvas
  state.el.empty();

  // 2. Render boxes
  state.boxes.forEach(function(box) {
    renderBox(box);
  });

  // 3. Render drag box
  renderBox(state.dragBox);
}

function renderBox(box) {
  if(box.render === true) {
    var boxEl = createBox(box);
    state.el.append(boxEl);
  }
}

function createBox(box) {
  var css = { width: box.width, height: box.height };

  if(box.y !== -1) css.top = box.y;
  if(box.x !== -1) css.left = box.x;

  var styles = getStyles(css);
  var boxEl = $(`<div id="${box.id}"
                  class="${box.className}"
                  ${styles}></div>`);

  if(box.displayHandles === true) {
    var handles = createHandles(box);
    boxEl.append(handles);
  }

  return boxEl;
}

function createHandles(box) {
  var handles = $('<div></div>');

  // top left
  handles.append(createHandle(
    box.handle,
    0 - (box.handle.width / 2), // top
    0 - (box.handle.width / 2) // left
  ));

  // top mid
  handles.append(createHandle(
    box.handle,
    0 - (box.handle.width / 2), // top
    (box.width / 2) - (box.handle.width / 2) // left
  ));

  // top right
  handles.append(createHandle(
    box.handle,
    0 - (box.handle.width / 2), // top
    box.width - (box.handle.width/2) // left
  ));

  // mid left
  handles.append(createHandle(
    box.handle,
    (box.height/2) - (box.handle.width / 2), // top
    0 - (box.handle.width/2) // left
  ));

  // mid right
  handles.append(createHandle(
    box.handle,
    (box.height/2) - (box.handle.width / 2), // top
    box.width - (box.handle.width/2) // left
  ));

  // bottom left
  handles.append(createHandle(
    box.handle,
    box.height - (box.handle.width / 2), // top
    0 - (box.handle.width / 2) // left
  ));

  // bottom mid
  handles.append(createHandle(
    box.handle,
    box.height - (box.handle.width / 2), // top
    (box.width / 2) - (box.handle.width / 2) // left
  ));

  // bottom right
  handles.append(createHandle(
    box.handle,
    box.height - (box.handle.width / 2), // top
    box.width - (box.handle.width/2) // left
  ));

  return handles;
}

function createHandle(handle, top, left) {
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
