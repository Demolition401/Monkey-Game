
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  var survivalTime=0;
  obstacleGroup = new Group()
  FoodGroup = new Group()
}


function draw() { 
background("white")
survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival time: " + survivalTime, 100,50);
  
  obstacles();
  bananas();
  
    if(keyDown("space")) {
    monkey.velocityY = -5;
    }
  else{
    monkey.velocityY = monkey.velocityY + 1
  }
  monkey.collide(ground)
  
    if (ground.x < 0){
         ground.x = ground.width/2; 
    }
  
      if(monkey.isTouching(obstacleGroup)){
monkey.scale = monkey.scale - 0.005
      }
  
  if(monkey.isTouching(FoodGroup)){
    monkey.scale = monkey.scale + 0.005
  }
  
  drawSprites();
}



function obstacles() {

  if (frameCount % 60 === 0) {
    obstacle = createSprite(600,330,40,10);
    obstacle.addImage("obstacle", obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle)
    //adjust the depth
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
  
}



function bananas() {

  if (frameCount % 60 === 0) {
    banana = createSprite(600,150,40,10);
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    FoodGroup.add(banana)
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
}