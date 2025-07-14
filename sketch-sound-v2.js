s0.initP5(); // send p5 to hydra
P5.toggle(0); // hide p5

H.pixelDensity(2); // set res

a.show(); // a.hide() to remove
a.setBins(8);
a.setSmooth(0.8);

let noiseSlider;

src(s0)
  .blend(src(o0).scale(0.97), 0.9)
  .modulateScale(
    noise(() => 1 + a.fft[0] * 10).scale(() => 1 - a.fft[0] * 0.1),
    0.05
  )
  .out(o0);

let svgImg, svgImg2, bg;
let bgColorPicker, tintColorPicker, tintColorPicker2;
let bgInput;

function preload() {
  svgImg = loadImage("assets/butterfly.svg");
  svgImg2 = loadImage("assets/inside.svg");
  bg = loadImage("assets/background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  createP("Background Color").position(10, 0);
  bgColorPicker = createColorPicker("#fff");
  bgColorPicker.position(150, 10);
  bgColorPicker.style("z-index", "10");

  createP("Outer Tint").position(10, 30);
  tintColorPicker = createColorPicker("#710000ff");
  tintColorPicker.position(150, 40);
  tintColorPicker.style("z-index", "10");

  createP("Inner Tint").position(10, 60);
  tintColorPicker2 = createColorPicker("#000");
  tintColorPicker2.position(150, 70);
  tintColorPicker2.style("z-index", "10");

  createP("Upload Background Image").position(10, 130);
  bgInput = createFileInput(handleBGUpload);
  bgInput.position(10, 170);

  createP("Upload New Graphic").position(10, 200);
  svgInput = createFileInput(handleSVGUpload);
  svgInput.position(10, 240);
}

function handleBGUpload(file) {
  if (file.type === "image") {
    bg = loadImage(file.data);
  }
}

function handleSVGUpload(file) {
  if (file.type === "image") {
    svgImg = loadImage(file.data);
  }
}

function draw() {
  clear();

  const bgCol = bgColorPicker.color();
  tint(bgCol);
  if (bg) image(bg, 0, 0, windowWidth, windowHeight);

  if (svgImg) {
    const tintCol = tintColorPicker.color();
    const tintCol2 = tintColorPicker2.color();
    tint(tintCol);
    // image(svgImg, 0 + svgImg.width / 4, height - svgImg.height, 1200);
    let aspect = svgImg2.height / svgImg2.width;
    let displayW = 1100;
    let displayH = displayW * aspect;
    image(
      svgImg,
      60 + svgImg.width / 4,
      height - svgImg.height,
      displayW,
      displayH
    );

    // tint(tintCol2);
    // let aspect = svgImg2.height / svgImg2.width;
    // let displayW = 1100;
    // let displayH = displayW * aspect;
    // image(svgImg2, 60 + svgImg.width / 4, height - svgImg.height + 40, displayW, displayH);
  }
}
