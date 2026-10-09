function setup() {

  createCanvas(800, 800); 
}

function draw() {
  
  background(240); 
  
  
  noStroke();
  
  fill(200, 20, 15);
  rect(0, 0, 357, 310);
  
  
  fill(25, 25, 14);
  rect(360, 520, 240, 220);
  
 
  fill(245, 205, 5);
  rect(0, 520, 75, 300);

 
  stroke(0);
  strokeWeight(15); 

  
  line(0, 310, 800, 310); 
  line(0, 520, 800, 520); 
  
  // Linhas Verticais
  line(360, 0, 360, 800);
  line(75, 520, 75, 800);  
  line(600, 520, 600, 800);  
  line(370, 740, 600, 740); 
}
