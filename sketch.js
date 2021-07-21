var START=0;
var PLAY=1;
var END=2;
var gameState=START;
var img,imgImg,imgImg2;
var garden,cat,mouse;
var gardenImg,cat1Img,mouse1Img;
var restart,restartImg;


function preload() {
    //load the images here
    gardenImg=loadImage("Images/garden.png");
    cat1Img=loadImage("Images/cat1.png");
    cat2Img=loadAnimation("Images/cat2.png","Images/cat3.png");
    cat3Img=loadImage("Images/cat4.png");
    mouse1Img=loadImage("Images/mouse1.png");
    mouse2Img=loadAnimation("Images/mouse2.png","Images/mouse3.png");
    mouse3Img=loadImage("Images/mouse4.png");
    imgImg=loadImage("Images/Game start.png");
    imgImg2=loadImage("Images/Game end.png");
    restartImg=loadImage("Images/restart.png");
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
    garden=createSprite(400,300);
    garden.addImage(gardenImg);
    garden.visible=true;
  
    cat=createSprite(680,540);
    cat.addImage("Moving",cat1Img);
    cat.scale=0.1;
    cat.debug=false;
    cat.setCollider("rectangle",0,0,800,800);
  
    mouse=createSprite(60,540);
    mouse.addImage("Teasing",mouse1Img);
    mouse.scale=0.1;
    mouse.debug=false;
    mouse.setCollider("rectangle",0,0,800,900);
  
    img=createSprite(400,300);
    img.addImage(imgImg);
    img.visible=false;
  
    block1=createSprite(400,488,200,60);
    block1.visible=false;
  
    restart=createSprite(420,400);
    restart.addImage(restartImg);
    restart.visible=false;
}

function draw() {
    background("grey");
    if(gameState==START){
      img.visible=true;
    if(mousePressedOver(block1)){
      gameState=PLAY;
      img.visible=false;
    }
    }
    if(gameState==PLAY){
//Write condition here to evalute if tom and jerry collide.
    if(cat.x-mouse.x<(cat.width-mouse.width/2)){
    cat.velocityX=0;
    cat.addImage("Moving",cat3Img);
    mouse.addImage("Teasing",mouse3Img);
    if(frameCount % 200 === 0){
      gameState=END;
    } 
    }
    keyPressed();
    }
    if(gameState==END){
      img.addImage(imgImg2);
      img.visible=true;
      restart.visible=true;
      img.y=240;
      if(mousePressedOver(restart)){
      gameState=PLAY;
      cat.x=680; 
      img.visible=false;
      restart.visible=false;  
      }
    }
    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here.
  if(keyDown(LEFT_ARROW)){
    cat.velocityX=-2;
    cat.addAnimation("Moving",cat2Img);
    mouse.addAnimation("Teasing",mouse2Img);
  }
  if(keyDown(RIGHT_ARROW)){
    cat.velocityX=0;
    cat.addImage("Moving",cat1Img);
    mouse.addImage("Teasing",mouse1Img);
  }
}