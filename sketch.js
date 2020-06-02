const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var ground;
var ball, slingShot;

function setup() {

  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  


  ground = new Ground(400,240,800,10);

  ball = new Ball(100,200);

  box1 = new Box(333,230,30,40);
  box2 = new Box(360,230,30,40);
  box3 = new Box(390,230,30,40);
  box4 = new Box(420,230,30,40);
  box5 = new Box(450,230,30,40);

  box6 = new Box(360,220,30,40);
  box7 = new Box(390,220,30,40);
  box8 = new Box(420,220,30,40);

  box9 = new Box(390,205,30,40);

  slingShot = new Slingshot(ball.body,{x:100,y:200});

}

function draw() {

  background(255,255,255);
  
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  ball.display();
  //ball.fill("blue");
  slingShot.display();

  //drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
  
  }
  
  function mouseReleased(){
  
  slingShot.fly();
  
  }



