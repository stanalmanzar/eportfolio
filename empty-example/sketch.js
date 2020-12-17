
var y = (10)
var w = (50)
var z = (70)
function setup() {
  
  createCanvas(400, 400);
}

function draw() {
  background(50);
  
  //head
  fill(255,165,0);
  circle(118,100,90);
  
  //nose
  fill(200,30,30);
  square(115,115,9,9);
  
  //dimples
 
  fill(200,50,100);
  strokeWeight(3);
  point(100,115);
  point(105,120);
  point(105,125);
  point(100,120);
  
  //mouth
  line(115,130,130,130);
  
  //eyes
  fill(255)
  ellipse(100,100,20,20);
  ellipse(140,100,20,20);
  //inner eyes
  fill(0,20,200);
  ellipse(100,100,9,9);
  ellipse(140,100,9,9);
  //body
  fill(0,200,150);
  triangle(120,145,60,250,150,250);
  
  //arms
  fill(100,50,100);
  quad(110,170,115,155,25,205,50,200);
  quad(125,170,130,155,190+y,130+z,170+y,150+w);
  //quad(125,170,130,155,190+y,130+z,170+y,150+w);
  //legs
  fill(200,0,200);
  rect(70,250,20,90);
  rect(115,250,20,90);
  //says hi and wave when mouse is pressed
  
if (mouseIsPressed) {
    
  line (300,90,300,120);
  line(300,105,320,105);
  line(320,90,320,120);
  line(330,105,330,120);
  circle(330,90,10);
  
  y= (10);
  z= (-5);
  w= (-5);
  }
else {
y = (10);
w = (50);
z = (70);

}


}