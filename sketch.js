function preload(){
  // put preload code here
}

function setup()
                {
createCanvas(windowWidth,windowHeight);
angleMode(DEGREES);
frameRate(24);
background("#77212E");
   // put setup code here
}

function draw()
               {
strokeWeight(1.8);
stroke(
       lerpColor(
                 color("#2A293E"),
                 color("#9F9C9"),
                 frameCount/120//120 perchè ruota ogni tre frame e 360:3=120
               )
             );
line(width/2+250, height/2, width/2+cos(frameCount*3)*250,height/2+sin(frameCount*3)*250);

if (frameCount == 120) {
  noLoop();
}// put drawing code here
}
