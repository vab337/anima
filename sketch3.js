let butterfly;
let growth = 0.5;

s0.initP5();
P5.toggle(0);
H.toggle(0);

src(s0)
  .kaleid(2)           // mirror the shape horizontally
  .modulate(noise(3), 0.01) // optional shimmer
  .out();

function preload() {
  butterfly = loadImage("assets/butterfly.svg"); // use your butterfly shape
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(0);

  // slowly increase scale
  growth = lerp(growth, 1.5, 0.01); // smooth growth over time

  push();
  translate(width / 2, height / 2);
  scale(growth);
  tint(255, 200); // optional fade
  image(butterfly, 0, 0, 300, 300); // adjust size to match art
  pop();
}
