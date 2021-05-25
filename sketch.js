const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var stand1,stand2;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,320);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  stand1 = new Stand(400,300,250,10);
  stand2 = new Stand(710,200,200,10);
 
  block1 = new Block(310,275,30,40);
  block2 = new Block(340,275,30,40);
  block3 = new Block(370,275,30,40);
  block4 = new Block(400,275,30,40);
  block5 = new Block(430,275,30,40);
  block6 = new Block(460,275,30,40);
  block7 = new Block(490,275,30,40);
  block8 = new Block(340,235,30,40);
  block9 = new Block(370,235,30,40);
  block10 = new Block(400,235,30,40);
  block11 = new Block(430,235,30,40);
  block12 = new Block(460,235,30,40);
  block13 = new Block(370,195,30,40);
  block14 = new Block(400,195,30,40);
  block15 = new Block(430,195,30,40);
  block16 = new Block(400,155,30,40);

  block17 = new Block(650,175,30,40);
  block18 = new Block(680,175,30,40);
  block19 = new Block(710,175,30,40);
  block20 = new Block(740,175,30,40);
  block21 = new Block(770,175,30,40);
  block22 = new Block(680,135,30,40);
  block23 = new Block(710,135,30,40);
  block24 = new Block(740,135,30,40);
  block25 = new Block(710,95,30,40);

  ball = Bodies.circle(40,200,25);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 

  textSize(20);
  fill("orange");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",90,40);

  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill(135,206,235);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill(255,192,203);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(64,224,208);
  block13.display();
  block14.display();
  block15.display();

  fill(128);
  block16.display();

  fill(135,206,235);
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill(64,224,208);
  block22.display();
  block23.display();
  block24.display();

  fill(255,192,203)
  block25.display();

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}