s0.initP5(); // send p5 to hydra
P5.toggle(0); // hide p5

H.pixelDensity(1); // set res

// src(s0)
// .blend(src(o0).scale(0.97), 0.9)
// .modulateScale(noize(400), 0.05).out(o0);


// src(s0)
// .blend(src(o0).scale(0.97), 0.9)
// .modulateScale(osc(100,0.1,0)) //nice motion
// .out(o0);

src(s0)
.blend(src(o0).scale(0.97), 0.9)
.modulateScale(noise(2).scale(1.01), 0.05).out(o0);



let svgImg, svgImg2;
let bgColorPicker, tintColorPicker, tintColorPicker2;

function preload() {
  svgImg = loadImage("assets/butterfly.svg"); // Make sure the file is in the same directory
  svgImg2 = loadImage("assets/inside.svg"); // Load the second SVG image
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bgColorPicker = createColorPicker("#FF21B5");
  bgColorPicker.position(10, 10);
  bgColorPicker.style("z-index", "10");

  // Tint color picker (default: red)
  tintColorPicker = createColorPicker("#710000ff");
  tintColorPicker.position(10, 40);
  tintColorPicker.style("z-index", "10");

tintColorPicker2 = createColorPicker("#FF21B5");
  tintColorPicker2.position(10, 70);
  tintColorPicker2.style("z-index", "10");
}

function draw() {
  clear();

  const bgCol = bgColorPicker.color();
  background(bgCol);

  // Draw image with tint
  if (svgImg) {
    const tintCol = tintColorPicker.color();
    const tintCol2 = tintColorPicker2.color();
    tint(tintCol);
    image(svgImg, 0, height - svgImg.height, 1200);
    
    tint(tintCol2);
    image(svgImg2,60, height - svgImg.height+40, 1100,400);

  }
}
