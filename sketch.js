
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,ground, launcher;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("Plucking mangoes/boy.png");
  }

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;

  stoneObj=new stoneObj(235,420,30); 


	mango1=new Mango(1100,100,30);
  mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1200,200,40);
	mango11=new Mango(1120,50,40);
	mango12=new Mango(900,160,40);


	treeObj=new Tree(1050,580);
	ground=new Ground(width/2,600,width,20);
	boy=new Launcher(stoneObj.body,{x:235,y:420})
  
}


function draw(){
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  strokeWeight(4);

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);
  detectCollision(stoneObj,mango12);


  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  mango12.display()
  treeObj.display();

  stoneObj.display();
  boy.display();    
  
  drawSprites();
}


function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
boy.fly();
}

function detectColllision(lstoneObj,lmango){
mangoBodyPosition=lmango.body.setPosition
stoneObjBodyPosition=lstoneObj.body.setPosition

var distance=dist(stoneObjBodyPosition.x, stoneObjBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=lmango+lstoneObj.r){
matter.Body.setStatic(lmango.body,false);

}

}