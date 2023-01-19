pioggia=[]
colori=["#3066BE","#119DA4","#6D9DC5","#80DED9","#AEECEF"]

function centerCanvas() {
  let x = (windowWidth - width) / 3;
  let y = (windowHeight - height) / 3;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
	background('#f0ead6');
}

function draw() {
	coloresfondo=color('#fffefa');
	coloresfondo.setAlpha(10);
	background(coloresfondo);
  
  if(frameCount%2==0){
    pioggia.push(new drip(random(width), random(height), random(10, 200)))
  }

  for(let i=pioggia.length-1; i>=0; i--){
    pioggia[i].move();
    pioggia[i].show();
  }
}

class pointer{
  constructor(rad, acc, finalSize){
    this.dist=1;
    this.rad=rad;
    this.speed=0;
    this.acc=acc;
    this.pos=createVector(0, 0);
    this.finalSize=finalSize;
    this.downSpeed=createVector(0, 0.5);
    this.downAcc=createVector(0, 0.05+this.acc/500);
  }
  
  move(){
    if(this.dist<=this.finalSize){
    this.speed+=this.acc;
    this.dist+=this.speed;
    this.pos=createVector(cos(this.rad)*this.dist, sin(this.rad)*this.dist);
    } else{
      this.downSpeed.add(this.downAcc);
      this.pos.add(this.downSpeed);  
    }
  }
}


class drip{
  constructor(x, y, extent){
    this.splat=[];
		this.color= color(random(colori))
    this.x=x;
    this.y=y;
		this.death=200;
    this.noiseStart=random(10);
  for(let i=this.noiseStart;i<this.noiseStart+TWO_PI; i+=0.1){
    let acc= (noise(i));
    this.splat.push(new pointer(i, acc, extent));
  }  
  }
  
 move(){
   for(let n of this.splat){
     n.move();
   }
	 this.death-=1;
   if(this.death<1){
     let index = pioggia.indexOf(this);
      pioggia.splice(index, 1);
   }
 } 



 show(){
 noStroke();
	 this.color.setAlpha(80);
 fill(this.color);
   push();
  translate(this.x, this.y);
  beginShape();
  for(let i=0; i<this.splat.length; i++){
    curveVertex(this.splat[i].pos.x, this.splat[i].pos.y)
  }
  endShape(CLOSE);
pop() 
 }
  
}
