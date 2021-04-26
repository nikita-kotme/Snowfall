const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow1, snow2,snow3,snow4,snow5;
var backgroundImg,platform; 
var bg;
var rand;
var maxSnow=15;

var drops = [];

function preload() {
bg = loadImage("snow1.jpg")
image1 = loadImage("snow1.jpg");
image2 = loadImage("snow2.jpg");
image3 = loadImage("snow3.jpg");


}
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);

  if(frameCount % 50 === 0){

    for(var i=0; i<maxSnow; i++){
       drops.push(new Snowfall(random(0,800), random(0,800)));
    }

}

}

function draw() {
  Engine.update(engine);
  background(bg);

 //displaying rain drops 
 for(var i = 0; i<maxSnow; i++){
  drops[i].showSnow();
  drops[i].updateY()
  
}  

  drawSprites();
}