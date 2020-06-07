//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var rope1,rope2,rope3,rope4,rope5,roof1;


function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	 bobObject1 = new bob(100,350,20,20);
	bobObject2 = new bob(200,390,20,20);
	bobObject3 = new bob(300,400,20,20);
	bobObject4 = new bob(400,410,20,20);
	bobObject5 = new bob(500,420,20,20)

	roof1 = new roof(200,100,500,70);
	rope1 = new rope(bobObject1.body,roof1.body);
	rope2 = new rope(bobObject2.body,roof1.body);
	rope3 = new rope(bobObject3.body,roof1.body);
	rope4 = new rope(bobObject4.body,roof1.body);
	rope5 = new rope(bobObject5.body,roof1.body);
	
}


function draw() {
 
  background(0);
  Engine.update(engine);
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}



