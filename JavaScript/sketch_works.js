function setup() {
  colorMode(HSL,360,100,100,100);
  canvas = createCanvas(windowWidth,document.body.clientHeight);
     canvas.position(0,0);
     canvas.style('z-index','-1');
     background(100);
 }
 
 function draw() {
   fill(random(150,200), 85, 70,25);
   noStroke();
   ellipse(random(windowWidth), random(document.body.clientHeight), random(150));
   if(frameCount > 180){
     noLoop();
   }
 }
 
