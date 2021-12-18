var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var hi
var score 
var num, yuh, stopNow
var ghostGroup
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  doorsGroup = createGroup()
  tower = createSprite(300,300);
  towerGroup = createGroup()
  towerGroup.add(tower)
  tower.addImage("tower",towerImg);
  
  tower.velocityY = 3;
  ghost = createSprite(200,200);
  ghostGroup = createGroup()
  ghostGroup.add(ghost)
  ghost.scale = 0.3
  ghost.addImage("ghost", ghostImg);
  textSize(30)
  fill("red")
  hi = text("GAME OVER PRESS R TO REDO!", 70,150);
  
}

function draw() {
  background(200);
   tower.scale = 1
   ghost.scale = 0.3

  hi.visible = false
   
   if (gameState == PLAY){
  spawnOb();
  doorsGroup.setLifetimeEach(30)
  towerGroup.setLifetimeEach(-1)
  ghostGroup.setLifetimeEach(-1)
  if(tower.y > 400){
      tower.y = 300
    }
  
    

    if(keyDown("space")) {
      ghost.velocityY = -10
    }
    ghost.velocityY += 0.5
    if(keyDown("right")) {
      ghost.x += 5
    }
    if(keyDown("left")){
      ghost.x += -5
    }
    
    num = 100
    score = frameCount+1
    
    if(frameCount&300 == 0){
      num-50
      
    
  }
    if ((doorsGroup.isTouching(ghost))){
      gameState = END
    
      
    }
  }
    else if (gameState == END){
     
      
     
      
      textSize(30)
      fill("red")
      hi = text("GAME OVER PRESS R TO REDO!", 70,50);
      hi.visible = true
      tower.scale = 0.0000001
        ghost.scale = 0.00000000001
        doorsGroup.destroyEach()
      if (keyDown("R")) {
        gameState = PLAY
        
        ghost.x = 250
        ghost.y= 250
      }
   }
   drawSprites()
   
  }
console.log()
function spawnOb(){
 
  if(frameCount%num == 0){
    
  door = createSprite(50,20)
  doorsGroup.add(door)
  door.addImage("door", doorImg);
  door.velocityX = Math.round(random(1,3))
  door.velocityY = door.velocityX+2

  }
}

