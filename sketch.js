const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1,rope1,rope2,rope3,rope4,rope5,bobObject1, bobObject2, bobObject3, bobObject4, bobObject5


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//roof1=Bodies.rectangle(350,100,300,30)
//	World.add(world,roof)
  
	bobObject1= new bob(250,300,50);
	bobObject2= new bob(300,300,50);
	bobObject3= new bob(350,300,50);
	bobObject4= new bob(400,300,50);
  bobObject5= new bob(450,300,50);
  
  roof1= new roof(350,100,300,20)
	
  rope1=new rope (bobObject1.body,roof1.body,-100,0);
  World.add(world,rope1)	
  
  rope2=new rope (bobObject2.body,roof1.body,-50,0);
  World.add(world,rope2)	
  
  rope3=new rope (bobObject3.body,roof1.body,-0,0);
  World.add(world,rope3)	
  
  rope4=new rope (bobObject4.body,roof1.body,+50,0);
  World.add(world,rope4)	
  
  rope5=new rope (bobObject5.body,roof1.body,+100,0);
  World.add(world,rope5)	

  
 
}


function draw() {
  
  background("lavender");
  Engine.update(engine)

roof1.display();


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

rope1.display();
   rope2.display();
   rope3.display();
  rope4.display();
 rope5.display();

 drawSprites();
 

}

function keyPressed(){
	if(keyCode === 32)
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position, {x:-50,y:45})
}


/*
sketch.js:
 -function keyPressed outside function draw()
-spelling keyCode, height,
ropeclass:
-in options, it should be pointB :
-World spellings

roof class: height spelling
index.html: spelling of sketch.js 
*/