var backImg,dog,cage,happy_jerry,sad_jerry,tom_running;
var tom;
var scene;
var obstacleGroup;
var invisibleGround;
function preload(){
  tom_running=loadAnimation("tom1.png","tom2.png","tom3.png","tom4.png")
  dog=loadImage("dog.png")
  cage=loadImage("cage.png")
  happy_jerry=loadImage("happyjerry.png")
  sad_jerry=loadImage("sadjerry.png")
  backImg=loadImage("background.png")

}




function setup() {
  createCanvas(1600,900);

  scene=createSprite(0,0,1600,900);
  scene.addImage(backImg);
  scene.scale=5.0;

  tom=createSprite(200,580,20,50);
  tom.addAnimation("running",tom_running);
  tom.scale=3.0;

  invisibleGround=createSprite(900,750,1700,10);
  invisibleGround.visible=true;
  scene.velocityX=-5;
  
}

function draw() {
  background("pink");  
  if(scene.x<0){
    scene.x=scene.width/2;
  }
  spawnObstacles();
  drawSprites();
}
function spawnObstacles(){
  if(frameCount%250===0){
    var obstacle=createSprite(1600,580,20,50);
    obstacle.addImage(dog);
    obstacle.velocityX=-6;
    obstacle.lifetime=270;

  }
}