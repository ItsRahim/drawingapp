function LineToTool() {
  this.icon = "assets/lineTo.jpg"; // The image that will load for the tool.
  this.name = "LineTo"; // The name of the tool.

  var startMouseX = -1; // Variable that stores the starting position of the mouse's X position.
  var startMouseY = -1; // Variable that stores the starting position of the mouse's Y position.
  var drawing = false; // Variable that stores whether the mouse is being pressed. If  not pressed, the variable is false.

  this.draw = function () {
    // The draw function is started when the tool is selected by the user.

    if (mouseIsPressed) {
      // Variable that stores the information on whether the mouse is being pressed or not.
      if (startMouseX == -1) {
        startMouseX = mouseX; // Starting position of	 Mouse's X position is set to the current position of the mouse's X position.
        startMouseY = mouseY; // Starting position of Mouse's Y position is set to the current position of the mouse's Y position.
        drawing = true; // Drawing is set to true when the mouse is pressed.
        loadPixels(); // loadPixels is a function that loads the pixel data of the canvas/image into an array.
      } else {
        updatePixels(); // updatePixels is a function that updates the canvas with the data in the pixels array.
        line(startMouseX, startMouseY, mouseX, mouseY); // line is a function that draws a line between two points. The starting and ending points are the start and end of the mouse pointer.
      }
    } else if (drawing) {
      // If the mouse is not pressed, the drawing variable is  false.
      drawing = false; // Drawing variable is false when the mouse is not being pressed.
      startMouseX = -1; // Starting position of mouse's X position is set to -1.
      startMouseY = -1; // Starting position of mouse's Y position is set to -1.
    }
  };
}
