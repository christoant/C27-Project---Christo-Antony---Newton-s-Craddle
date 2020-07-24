const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,ground;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Ground(400,200,400,50);
	ground = new Ground(400,790,800,20);

	ball1 = new Ball(400,450,35);
	ball2 = new Ball(470,450,35);
	ball3 = new Ball(540,450,35);
	ball4 = new Ball(330,450,35);
	ball5 = new Ball(260,450,35);

	rope1 = new String(ball1.body,box1.body,0,0);
	rope2 = new String(ball2.body,box1.body,70,0);
	rope3 = new String(ball3.body,box1.body,140,0);
	rope4 = new String(ball4.body,box1.body,-70,0);
	rope5 = new String(ball5.body,box1.body,-140,0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
	box1.display();
	ground.display();

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode == 37){
		Body.applyForce(ball5.body,ball5.body.position,{x:-350, y:-500})
	}

}


