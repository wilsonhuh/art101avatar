
function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw(){
console.log("mouse x is: " + mouseX);
console.log("mouse y is: " + mouseY);
  
  limitx = map(mouseX, 0, 400, 80, 120)
  limity = map(mouseY, 0, 400, 65, 96)
  
  
  strokeWeight(0);
  background(0,50,50);
  angleMode(DEGREES)
  drawBubble(40,-150,70,70);
  drawBubble(-40,150,70,70);
  drawBubble(40,150,50,50);
  drawBubble(-40,-150,50,50);
  drawBubble(-100,-100,40,40);
  drawBubble(100,100,40,40);
  drawLimbs();
  drawBody();
  drawMouth();
  drawEyes(limitx,limity);


}

function drawLimbs() {

fill(62, 169, 255); // Limb Color
triangle(width*.05, height*.4,width*.3, height*.5,width*.3, height*.6); // L Arm
triangle(width*.95, height*.4,width*.7, height*.5,width*.7, height*.6); // R Arm
triangle(width*.1, height*1,width*.3, height*.7,width*.35, height*.8); // L Leg 1
triangle(width*.9, height*1,width*.7, height*.7,width*.65, height*.8); // R Leg 1
triangle(width*.3, height*1,width*.6, height*.7,width*.4, height*.8); // L Leg 2
triangle(width*.7, height*1,width*.4, height*.7,width*.6, height*.8); // R Leg 2

}

function drawBody() {
fill(62, 169, 255); // Body Color
ellipse(width*.5, height*.5+40, 200, 200); // Body
quad(90, 100, 110, 90, 160, 160, 150, 170); // L Eyestalk
quad(240, 160, 280, 90, 300, 100, 250, 170); // R Eyestalk
}

function drawMouth() {
fill(0, 122, 220); // Mouth Color
beginShape();
vertex(width*.36, height*.45);
vertex(width*.4, height*.7);
vertex(width*.45, height*.6);
vertex(width*.5, height*.7);
vertex(width*.55, height*.6);
vertex(width*.6, height*.7);
vertex(width*.64, height*.45);
vertex(width*.58, height*.55);
vertex(width*.55, height*.4);
vertex(width*.5, height*.55);
vertex(width*.45, height*.4);
vertex(width*.42, height*.55);
endShape(CLOSE);
}

function drawBubble(a, b, c, d) {
fill(100, 200, 255); // Bubble Color 
push();  
translate(width/2,height/2)  
rotate(frameCount);  
ellipse(a, b, c, d); // Bubble
pop(); 
}  

function drawEyes(x, y) {
fill(219); // Eye Color
ellipse(width/2-100, 80, 80, 80); // L Eye 
ellipse(width/2+100, 80, 80, 80); // R Eye 

  if (mouseX<400 && mouseY<400) {
fill(0); // Pupil Color    
push();
ellipse(limitx, limity, 30, 30); // L Pupil
ellipse(200+limitx, limity, 30, 30); // R Pupil 
pop();
}  else if (mouseX>400 || mouseY>400){
fill(62, 169, 255);
ellipse(width/2-100, 80, 80, 80); // L Eyelid
ellipse(width/2+100, 80, 80, 80); // R Eyelid
fill(0, 122, 220);
rect(60,77,80,3);
rect(260,77,80,3);
}

  
}
