function preload() {}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.center();
  let a = ('pink')
  fill(a)
  rect(25, 30, 35, 425, 20);
  rect(50, 415, 545, 35, 20);

  let c = color('purple');
  fill(c)
  rect(50, 10, 545, 35, 20);
  circle(45, 30, 50);



  let d = color('magenta');
  fill(d)
  rect(550, 30, 35, 425, 20);
  circle(45, 430, 50);



  let e = ('red')
  fill(e)
  circle(570, 430, 50);
  circle(570, 30, 50);

  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 70, 70, 465, 340);
}

function take_snapshot() {
  save('Natasha_and_Friends.png');
}
