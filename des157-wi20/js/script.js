function setup() {
    var myCanvas = createCanvas(800,250);
    myCanvas.parent(mySketch);
    background(255);
  }
  
function draw() {
if (mouseIsPressed) {
    fill(random(0,255),0,0, 100);
    ellipse(mouseX, mouseY, random(20,60), 30);
} else {
    stroke(random(0,255), 0, 0, 100);
    line(mouseX, mouseY, width/2, height);
}
}