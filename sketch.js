
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ball, box1, box2, box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ball = new Ball(200, 0);
	box1 = new Box(400, 560, 20, 120);
	box2 = new Box(500, 560, 120, 20);
	box3 = new Box(600, 560, 20, 120)
	//Create the Bodies Here.
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  box1.display();
  ball.display();
  box2.display();
  box3.display();
  drawSprites();
 
}



