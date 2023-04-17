function drawRectangleTool() {
  this.icon = "assets/rectangle.jpg";
  this.name = "drawRectangleTool";

  this.draw = function () {
    let x = mouseX;
    let y = mouseY;
    let w = 150;
    let h = 50;

    if (mouseIsPressed && mouseButton == LEFT) {
      // Draw the rectangle with filled background
      rect(x, y, w, h);
    } else if (mouseIsPressed && mouseButton == RIGHT) {
      noFill();
      rect(x, y, w, h);
      fill(0);
    }
  };
}
