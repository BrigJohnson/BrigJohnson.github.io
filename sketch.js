function setup() {
	createCanvas(1400,750);
}
function draw() {
	background(0);


animateDM(mouseX, mouseY);

}

function animateDM(x, y) {
	push();
	translate(x, y);


	if ((frameCount / 15) % 2 < 1) {
    drawDM1();
	}
   else {
		drawDM2();
	}
	pop();
}

function drawDM1() {
  fill(255, 0, 200);
rect( 270, 250, 150);
  rect (420, 290, 10, 150);
  rect (260, 290, 10, 150);
  rect (300, 400, 20, 120);
  rect (370, 400, 20, 120);
  ellipse(345, 195, 120, 120);
  rect(365, 195, 15, 1)
  rect(315, 195, 15, 1)
  }

function drawDM2() {
  fill(255, 50, 0);

  rect( 270, 250, 150);
rect (420, 290, 150, 10);
rect (260, 290, 150, 10);
rect (300, 400, 20, 120);
rect (370, 400, 120, 20);
ellipse(345, 195, 120, 120);
ellipse(370, 195, 20, 20);
ellipse(325, 195, 20, 20);
}

