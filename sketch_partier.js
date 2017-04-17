var partier = [];
var target = 'start';
var info = "Velkommen, Eirik. Trykk på en av de to boksene.";

function preload() {
  frp = loadImage('frp.jpeg');
  mdg = loadImage('mdg.jpg');
}

function setup() {
  createCanvas(600, 300);
  // Partinavn, logo, start, miljø, skatt
  partier[0] = new Parti('frp', frp, 200, 150, 550);
  partier[1] = new Parti('mdg', mdg, 200, 550, 250);
}

function draw() {
  background(255);
  fill(200)
  rect(200, 50, 100, 50);
  rect(400, 50, 100, 50);
  fill(0, 102, 153);
  textSize(20);
  text(info, 100, 30);
  textSize(15);
  text("MILJØ", 220, 75);
  text("SKATT", 420, 75);
  
  line(150, 250, 550, 250);
  for (x = 200; x < 600; x += 100) {
    line(x, 240, x, 260);
  }
  text("HJERTESAK", 500, 275);
  text("NEDPRIORITERT", 100, 275);
  for (i = partier.length - 1; i >= 0; i--) {
    partier[i].updatePos(target);
    partier[i].display();
  }
}

function mousePressed() {
  if (mouseX < 300 && mouseX > 200 && 50 < mouseY && mouseY < 100) {
    target = 'env';
    info = 'Partiaksen er nå endret til prioriteringsnivå for MILJØ';
  }  else if (mouseX > 400 && mouseX < 500 && 50 < mouseY && mouseY < 100) {
    target = 'tax';
    info = 'Partiaksen er nå endret til prioriteringsnivå for SKATT';
  }
}