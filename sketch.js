
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var rope1,rope2,rope3,rope4,rope5;
var roof1;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobObject1=new bob(300,550,40);
  roof1=new roof(410,180,390,30);
  rope1=new rope(bobObject1.body,roof1.body,-40*2, 0)
 // roof.shapeColor=color("orange");
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 
  bobObject1.display();
  roof1.display();
  rope1.display();
}



