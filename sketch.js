const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

//using mic to move the sprite
var mic = new p5.AudioIn();
mic.start();

var score = 0;

var player, ground, obstacles, clouds, coins;

var img, img2;

var engine, world;

  function preload() {
    img = loadAnimation("images/mario.gif")
    img2 = loadAnimation("images/cloud.png")
  }

function setup() {
  createCanvas(800,400);

  //using the audio in concepts
  let vol = mic.getLevel();

  console.log(vol)

  //creating the ground
  ground = createSprite(width/2, 370, 10000, 60);
  ground.shapeColor = "green";
  ground.velocityX = -2
  ground.x = ground.width/2

  //creating the sprites
  player = createSprite( 150, vol+100 , 10, 10);
  player.addAnimation("Mario", img);

  //using the gravity concepts

  player.velocity = -vol;
  player.velocityY = player.velocityY + 8;

  //creating the clouds

}

function draw() {
  background(183,110,121);

  if (ground.x < 0){
    ground.x = ground.width/2
  }

  spawnClouds();

  drawSprites();
}


  function spawnClouds()  {
    if (frameCount % 120 === 0){
      clouds = createSprite(800,random(00,200), 20, 20);
      clouds.addAnimation("Clouds", img2)
      clouds.scale = 0.15
      clouds.velocityX = -2
    }
  }
