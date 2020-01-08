var rood = 255; 
var groen = 255;
var blauw = 255;
function setup() {

  createCanvas(400,400);
  background(240);

  var vincent = "hallo";
  
}

function draw() {
  background(0,400-mouseX,0);
  rood = random(0,255);
  groen = random(255);
  blauw = random(255);
  // background(rood,groen,blauw);

 // groot rondje
 noStroke();
 fill(255,200,200);
 ellipse(200,200,400,400); 

  // klein vierkant
  noStroke();
  fill(0,0,0);
  rect(150,150,100,100);
 
  // dikke lijn
  stroke(0,0,0);
  strokeWeight(10);
  line(200,0,200,400);

  line(0,200,400,200)
  // klein rondje
  noStroke();
  fill(200,100,255);
  ellipse(200,200,50,50); 
}