var flower = 0


function setup() {
  // put setup code here
  createCanvas (500,500) ;
}

function draw() {

  background ("lightblue") ;
  //stem
  strokeWeight(8);
  stroke("#6f9b3c")
  line(250, 250, 250, 500);
//flower
  fill ("white")
  strokeWeight()
  ellipse (width/2-69.5,200,flower,flower) ;
  fill ("white")
  ellipse (260,172.5,flower,flower) ;
  fill ("white")
  ellipse (320,220,flower,flower) ;
  fill ("white") ;
  ellipse (310,300,flower,flower) ;
  fill ("white") ;
  ellipse (240,325,flower,flower) ;
  fill ("white") ;
  ellipse (173.5,280,flower,flower) ;
  fill ("#FACA0F") ;
  strokeWeight (0) ; 
  ellipse (width/2,height/2,90,90) ;
  flower = (mouseX/14);
  //text
  point(450, random(height));
  textSize (20);
  textFont ("Arial");
  textStyle (ITALIC);
  textAlign (CENTER,CENTER);
  fill ("white")
  text("Find out how to create the perfect flower", width/2,70);


}

function mousePressed () {

} 
