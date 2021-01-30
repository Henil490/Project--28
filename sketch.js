
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
  boy=loadImage("boy.png");
  tree=loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,680,width,20);
  stone=new Stone(235,480,30);
  


	//Create the Bodies Here.
mango1=new Mango(1100,280,30);
mango2=new Mango(1170,250,30);
mango3=new Mango(1010,200,30);
mango4=new Mango(1000,250,30);
mango5=new Mango(1100,230,30);


//launch=new Launch(stone.body,{x:235,y:480})


  
}


function draw() {
  Engine.update(engine);

  background(255);
  image(boy,200,400,150,300);
 image(tree,850,100,450,600);
  ground.display();
  stone.display();
 

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
 
 
  //launch.display()

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

}

function mouseDragged()
{
	//Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY}) 
}

function mouseReleased()
{
	launch.fly();
   
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launch.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}

}


