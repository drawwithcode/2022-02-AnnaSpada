const myPalette = ['#FF99C8', '#FCF6BD', '#D0F4DE','#A9DEF9', '#E4C1F9']
const myPalette2 = ['#FF9888', '#FCF888', '#D0F888','#A98888', '#E4C777']


function setup() {
  createCanvas(windowWidth, windowHeight); 
  
}


function draw() {    
  noLoop();
} 
      

function mouseClicked() {
  background(0)
  let listaRaggi = [width/50,
                    width/80,
                    width/100,
                    width/120]

  let raggio = random(listaRaggi);
  
    for (let i = 1; i <= width/raggio*2 ; i+=2) {
      for(let b = 1; b <= height/raggio*2 ; b+=2){

      let x = i * raggio/2;
      let y = b * raggio/2;

     
      col = random(myPalette)
      fill(color(col));
      circle(x,y,raggio);
     }
  }
  
}

function mouseMoved() {   
  if(mouseX>100)
  {
     fill(255,0,0);
  } else {
     fill(200);
  }
  
 
} 





function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


 
