function setup() {

  createCanvas(800, 800); 
}

function draw() {
  
  background(240); 
  
  
  noStroke();
  
  fill(200, 20, 15);
  rect(2, 0, 357, 310);
  
  
  fill(15, 40, 110);
  rect(360, 520, 240, 220);
  
 
  fill(205, 205, 5);
  rect(0, 520, 75, 300);

 
  stroke(0);
  strokeWeight(10); 

  
  line(0, 310, 800, 310); 
  line(0, 520, 800, 520); 
  
  // Linhas Verticais
  line(359, 0, 360, 800);
  line(74, 520, 75, 800);  
  line(599, 520, 600, 800);  
  line(369, 740, 600, 740); 
}
