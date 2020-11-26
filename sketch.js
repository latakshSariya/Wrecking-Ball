const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var box1 , box2 , box3 , box4
, box5 , box6 , box7 , box8 , 
box9 , box10 , box11 , box12 , 
box13 , box14 , box15 ,box16 , box17 , box18 ;

var ball;

var chain1;


function preload(){


}
function setup(){
  createCanvas(2000,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2 , 780 , 2000 , 20);
  box1 = new Box(1500,770,80,80);
  box2 = new Box(1590,770,80,80);
  box3 = new Box(1680,770 ,80 ,80);
  box4= new Box(1500,690,80,80);
  box5 = new Box(1590,660,80,80);
  box6 = new Box(1680,660,80,80);
  box7 = new Box(1500,590,80,80);
  box8 = new Box(1590,590,80,80);
  box9 = new Box(1680,590,80,80);
  box10 = new Box(1500,510,80,80);
  box11 = new Box(1590,510,80,80);
  box12 = new Box(1680,510,80,80);
  box13 = new Box(1500,430,80,80);
  box14 = new Box(1590,430,80,80);
  box15 = new Box(1680,430,80,80);
  box16 = new Box(1500,350,80,80);
  box17 = new Box(1590,350,80,80);
  box18 = new Box(1680,350,80,80);

  ball = new Ball(width/2 ,400,40);

  chain1 = new Chain(ball.body , {x:900 , y:50});
}

function draw(){
  background("black");
  Engine.update(engine);
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
  box10.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  ball.display();

  chain1.display();

}





