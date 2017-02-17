# Experiments with Austin

## Objective

Teach the basics of building a GUI drawing tool using the DOM.

## Concepts

- Separate State from Methods
- Game Loop (state, inputs, updates, render)
- Constant updates to DOM
- No UI frameworks, pure DOM (using jQuery to make it a little easier)
- No build tools or severs

## Features

- Render text
- Render boxes
- Render resize box
- Resize box after drag the mouse

## TODO

- move box render methods to renderers folder
- add type to objects, ie. type: 'box', type: 'dragbox', etc.
- make drag happen only once a corner is touched
- start the drag at the beginning of resizing box
