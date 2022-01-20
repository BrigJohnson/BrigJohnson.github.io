function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let boat = 26;

function setup() {
  createCanvas(720, 480);  //do not touch!
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw() {
  background(204);
  // Neck
  stroke(255, 215, 0); // Set stroke to gray
  line(266, 257, 266, 162); // Left
  line(276, 257, 276, 162); // Middle
  line(286, 257, 286, 162); // Right
  // Antennae
  line(276, 155, 246, 112); // Small
  line(276, 155, 306, 56); // Tall
  line(276, 155, 342, 170); // Medium
  // Body
  noStroke(); // Disable stroke
  fill(255, 215, 0); // Set fill to gray
  ellipse(281, 391, 47, 47); // Antigravity orb
  fill(225); // Set fill to black
  rect(229, 267, 100, 130); // Main body
  fill(0, 0, 225); // Set fill to gray
  rect(214, 269, 85, 1); // Gray stripe
  fill(0, 0, 225); // Set fill to black
  ellipse(286, 165, 55, 55); // Head
  fill(225); // Set fill to white
  ellipse(288, 150, 14, 14); // Large eye
  fill(255, 191, 0); // Set fill to black
  ellipse(288, 150, 3, 3); // Pupil
  fill(255, 215, 0); // Set fill to light gray
  ellipse(263, 148, 5, 5); // Small eye 1
  ellipse(296, 130, 4, 4); // Small eye 2
  ellipse(305, 162, 3, 3); // Small eye 3
}
