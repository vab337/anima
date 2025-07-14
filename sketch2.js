s0.initP5()
P5.toggle(0)
H.toggle(0)

noize(1000,0.1).out()

var H2 = HY5.hydra('hydra2', 'synth') // 2nd hydra
synth.s0.initP5()
H2.z(2) // double check on top

H2.pixelDensity(1 ) // 2x = retina, set <= 1 if laggy

synth.src(synth.s0)
  .add(src(o0).scale(0.97), 0.9)
  .modulateScale(noize(500, 2), 0.2)
	.out()

let svgImg, svgImg2;
let bgColorPicker, tintColorPicker, tintColorPicker2;

function preload() {
  svgImg = loadImage("assets/butterfly.svg"); // Make sure the file is in the same directory
  svgImg2 = loadImage("assets/inside.svg"); // Load the second SVG image
}

function setup() {
	createCanvas(windowWidth, windowHeight)
    	angleMode(DEGREES)


  bgColorPicker = createColorPicker("#0D0202");
  bgColorPicker.position(10, 10);
  bgColorPicker.style("z-index", "10");

  // Tint color picker (default: red)
  tintColorPicker = createColorPicker("#C70A27");
  tintColorPicker.position(10, 40);
  tintColorPicker.style("z-index", "10");

    tintColorPicker2 = createColorPicker("#ffffffff");
  tintColorPicker2.position(10, 70);
  tintColorPicker2.style("z-index", "10");
}

function draw() {
	clear()
	
// 	texture(H.get())
//   const bgCol = bgColorPicker.color();
//   background(bgCol);

//   // Draw image with tint
//   if (svgImg) {
//     const tintCol = tintColorPicker.color();
//     const tintCol2 = tintColorPicker2.color();
//     tint(tintCol);
//     image(svgImg, 0, -0, 1200);
//     tint(tintCol2);
//     image(svgImg2,0, 0, 1100,400);

//   }

  push()
  resetMatrix()

//   translate(-width / 2, -height / 2, 0)

  background(bgColorPicker.color())

  if (svgImg) {
    tint(tintColorPicker.color())
    image(svgImg, 0, height - svgImg.height, 1200)
  }

  if (svgImg2) {
    tint(tintColorPicker2.color())
    image(svgImg2, 60, height - svgImg.height + 40, 1100, 400)
  }
  pop()

  // display Hydra result as texture
  push()
  texture(H.get())
  noTint()
  plane(width, height)
  pop()
}
