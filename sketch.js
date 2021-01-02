var boy;
var stone;
var tree;
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Boy(100,480,100,100)
	stone = new Stone(90,400,50,50)
	tree = new Tree(700,580,300,300)
	ground = new Ground(100,600,100,10)
	mango1 = new Mango(690,580,30,30)
	mango2 = new Mango(690,590,30,30)
	mango3 = new Mango(695,580,30,30)
	mango4 = new Mango(695,590,30,30)
	mango5 = new Mango(700,580,30,30)
	mango6 = new Mango(700,590,30,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy.display();
  stone.display();
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display()
  drawSprites();
 
}



