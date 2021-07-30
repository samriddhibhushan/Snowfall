const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies; 

var world,engine;
var bg;
var snow=[];
var bubbleImg, bubble;
var music;

function preload(){
  bg=loadImage("background.jpg");
  bubbleImg=loadAnimation("bubble2.png","bubble2.png","bubble4.png","bubble4.png");
  music=loadSound("bgs.wav");
}

function setup() {
  createCanvas(1000,700);

  engine = Engine.create();
  world = engine.world;

  bubble=createSprite(500, 500, 50, 50);
  bubble.addAnimation("dancing",bubbleImg);
  bubble.scale=0.2;

  if(frameCount%10===0){
    snow.push(new Snow(random(0,1000),10));
    
  }
  
}

function draw() {
  background(bg);  
  Engine.update(engine);

  music.play();
  

  if(frameCount%10===0){
    snow.push(new Snow(random(0,1000),10));
  }

  for (var q = 0; q < snow.length; q++) {
    snow[q].display();
  }

  drawSprites();
}