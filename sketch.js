const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var slingShot;
var block17, block18, block19, block20, block21, block22, block23, block24, block25;
var polygon_img;
var bg, score;
function preload(){
  polygon_img=loadImage("polygon.png");
  getTime();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 // var ball = createSprite(200,50,15,15);
  //ball.addImage(polygon_img);
 // ball.scale = 0.2;
  ground = new Ground();
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  slingShot = new Slingshot(ball,{x:100, y:200});
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  block1 = new Block(300,270,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,280,30,40);
  block4 = new Block(390,280,30,40);
  block8 = new Block(330,235,30,40);
  block6 = new Block(420,280,30,40);
  block7 = new Block(450,280,30,40);
  block5 = new Block(480,280,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  block17 = new Block(760,130,30,40);
  block18 = new Block(730,130,30,40);
  block19 = new Block(700,130,30,40);
  block20 = new Block(670,130,30,40);
  block21 = new Block(640,130,30,40);
  block22 = new Block(730,100,30,40);
  block23 = new Block(700,100,30,40);
  block24 = new Block(670,100,30,40);
  block25 = new Block(700,70,30,40);
}
function draw() {
  if(bg){
    background(bg);
    } 
    else{
      background(0);
    }
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  ground.display();
  stand1.display();
  stand2.display();
  fill("Blue");
  block1.display();
  fill("Yellow");
  block2.display();
  fill("blue");
  block3.display();
  fill("Yellow");
  block4.display();
  fill("Blue");
  block8.display();
  fill("Blue");
  block6.display();
  fill("Yellow");
  block7.display();
  fill("Blue");
  block5.display();
  fill("Yellow");
  block9.display();
  fill("Blue");
  block10.display();
  fill("Yellow");
  block11.display();
  fill("Blue");
  block12.display();
  fill("Blue");
  block13.display();
  fill("Yellow");
  block14.display();
  fill("Blue");
  block15.display();
  fill("Blue");
  block16.display();
  fill("Blue");
  block17.display();
  fill("Yellow");
  block18.display();
  fill("Blue");
  block19.display();
  fill("Yellow");
  block20.display();
  fill("Blue");
  block21.display();
  fill("Blue");
  block22.display();
  fill("Yellow");
  block23.display();
  fill("Blue");
  block24.display();
  fill("Blue");
  block25.display();
  slingShot.display();
 // ellipse(ball.position.x, ball.position.y,20,20);
 // rect(100,300,50,50);
// drawSprites();
image(polygon_img,ball.position.x,ball.position.y,40,40);

}
function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

async function getTime(){
  var myTime = await fetch ("http://worldclockapi.com/api/json/est/now");
  var data = await myTime.json();
  var myDateandTime = data.currentDateTime;
  var hour = myDateandTime.slice(11,13);
  console.log(hour);
  if(hour>=6 && hour<=19){
      backgroundImg = "sprites/bg.png";
  }
  else{
      backgroundImg = "sprites/bg2.jpg";
  }
  bg = loadImage(backgroundImg);
}