var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var SurvialTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(550,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("the Monkey Runner",monkey_running);
  monkey.scale = 0.1;

    ground = createSprite(400,350,1200,10);
    ground.velocityX = -4;
    ground.x = ground. width/2;
  
  obstaclesGroup = new Group();
  foodsGroup = new Group();
  
  score = 0
}


function draw() {
  background("white");
  if(gameState == PLAY){
  food();
  obstacle();
  if(ground.x<0){
    ground.x = ground. width/2; 
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  
  } 
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(ground);  
    stroke("white");
    textSize(15);
    fill("black");
    text("score:" + score,500,50);
    

    stroke("black");
    textSize(20);
    fill("black");
    SurvialTime = Math.ceil(frameCount/getFrameRate());
    text("Survial Time:" + SurvialTime,100,50);
  } 
if(foodsGroup.isTouching(monkey)){
  foodsGroup.destroyEach();
  score=score+1;
}

    drawSprites();
  
}

function food(){
if(frameCount % 80 == 0){
  banana = createSprite(400,200,20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.y = Math.round(random(120,200));
  banana.velocityX = -11;
  banana.lifetime = 50;
  foodsGroup.add(banana);
}
}

function obstacle(){
  if(frameCount % 300 == 0){
    obstacles = createSprite(400,300,20,20);
    obstacles.addImage(obstaceImage);
    obstacles.scale = 0.25;
    obstacles.velocityX = -12;
    obstaclesGroup.add(obstacles)
  }
}