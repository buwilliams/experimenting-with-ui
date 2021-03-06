var state = {
  el: '#canvas',
  eventsListening: false,
  running: true,
  mouseDown: false,
  mouseDownStart: { x: -1, y: -1 },
  mouseDownCurrent: { x: -1, y: -1 },
  mouseDownEnd: { x: -1, y: -1 },
  mouseDownDistance: { width: 0, height: 0 },
  mainBox: 0,
  dragBox: {
    render: false,
    id: 'dragbox',
    mouseClassName: 'drag',
    className: 'dragbox',
    minDistance: { x: 2, y: 2},
    x: -1,
    y: -1,
    width: -1,
    height: -1,
    displayHandles: false
  },
  boxes: [{
    render: true,
    id: 'box-1',
    className: 'box',
    x: 20,
    y: 70,
    width: 300,
    height: 300,
    displayHandles: true,
    handle : {
      className: 'handle',
      height:  8,
      width: 8
    }
  },
  {
    render: true,
    id: 'box-2',
    className: 'text',
    x: 20,
    y: 20,
    width: 500,
    height: 50,
    displayHandles: false,
    text: 'Drag your mouse anywhere on the screen to resize the box.',
    handle : {
      className: 'handle',
      height:  8,
      width: 8
    }
  }]
};
