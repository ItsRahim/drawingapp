function drawEllipseTool() {
  this.icon = "assets/ellipse.jpg";
  this.name = "drawEllipseTool";

  var img = loadImage("assets/sprayCan.jpg");

  this.draw = function () {
    let x = mouseX;
    let y = mouseY;
    let w = 150;
    let h = 75;

    if (mouseIsPressed && mouseButton == LEFT) {
      ellipse(x, y, w, h);
    } else if (mouseIsPressed && mouseButton == RIGHT) {
      noFill();
      ellipse(x, y, w, h);
      fill(0);
    }
  };
}
