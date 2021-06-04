var binImage, parkImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);

  park = createSprite(800,700, 200, 200);
  park.addImage(parkImage);

  bin = createSprite(60,200,20,20);
  bin.addImage(binImage);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 10);

  ground = new Ground(400, 680, 800, 20);
  
  leftSide = new Dustbin(550, 620, 20, 100);
  bottom = new Dustbin(610, 660, 100, 20);
  rightSide = new Dustbin(670, 620, 20, 100);

	Engine.run(engine);
  
}


function preload(){

  binImage = loadImage("images/bin.jpg");
  parkImage = loadImage("images/park.jpg");




}

function draw() {
  rectMode(CENTER);

  background(parkImage);
  
  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
  }
}