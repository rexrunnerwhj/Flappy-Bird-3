var bg, bgImage;
var bird, birdImage;
var upperPillar, upperPillarImage, upperPillarGroup;
var lowerPillar, lowerPillarImage, lowerPillarGroup;
var PLAY = 1;
var END  = 0;
var gameState = PLAY;

function preload() {
  bgImage = loadImage("Flappy Bird Background.png");
  birdImage = loadImage("Flappybird.png");
  upperPillarImage = loadImage("pipe1.png");
  lowerPillarImage = loadImage("pipe2.png");
}

 

function setup() {
  createCanvas(1363,760);
  bg = createSprite(681,380,1363,760);
  bg.addImage(bgImage);
  bg.scale = 3;
  

  bird = createSprite(660,380,20,20);
  bird.addImage(birdImage);
  bird.scale = 0.4;

  upperPillarGroup = new Group();
  lowerPillarGroup = new Group();
}

function draw() {
  background("black"); 

  if(gameState === PLAY){
    bg.velocityX = -3; 

      if(bg.x<400){
        bg.x = 681;
      }

      if(keyDown("space")){
        bird.velocityY = -10;
      }

      bird.velocityY = bird.velocityY + 0.5;
      
      spawnUpperPipe();
      spawnLowerPipe();


      if(upperPillarGroup.isTouching(bird)){
        gameState = END;
      }

      if(lowerPillarGroup.isTouching(bird)){
        gameState = END;
      }
    }

    if(gameState === END){
      bg.velocityX = 0;
    }
    drawSprites();
  }

//write code here to spawn the pillars
function spawnUpperPipe() {
  if (frameCount % 100 === 0) {
    upperPillar = createSprite(1363,120,40,10);
    upperPillar.y = Math.round(random(80,120));
    upperPillar.addImage(upperPillarImage);
    upperPillar.scale = 0.5;
    upperPillar.velocityX = -3;
    
     //assign lifetime to the variable
    upperPillar.lifetime = 700;
    
    //add each cloud to the group
    upperPillarGroup.add(upperPillar);
  }
  
}


function spawnLowerPipe() {
  if (frameCount % 100 === 0) {
    lowerPillar = createSprite(1363,600,40,10);
    lowerPillar.y = Math.round(random(550,650));
    lowerPillar.addImage(lowerPillarImage);
    lowerPillar.scale = 0.5;
    lowerPillar.velocityX = -3;
    
     //assign lifetime to the variable
    lowerPillar.lifetime = 700;
    
    //add each cloud to the group
    lowerPillarGroup.add(lowerPillar);
  }
  
}