
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box, boxImage;

function preload(){
	
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ball = new Ball(100,650, 20);
	 World.add(world, ball);

	 ground = new Ground(400,770, width*2, 20);
	 World.add(world, ground);

     dustbin = new Dustbin(1000, 730); 

	 launcher = new Launcher(ball.body, {x: 150, y: 350});


	Engine.run(engine);
  
}


function draw() {
  background("lightgrey");

  Engine.update(engine);
  
  ball.display();
  ground.display();
  dustbin.display();
  launcher.display();
  
  drawSprites();
 
}

function mouseDragged(){

	Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){

	launcher.fly();
}





