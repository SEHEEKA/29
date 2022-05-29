const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var fruit
var rope
var fruit_con
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,690,600,20)
  rope = new Rope(7,{x:245,y:30})
  
  fruit = Bodies.circle(300,300,15)
  Matter.Composite.add(rope.body,fruit)

  fruit_con = new Link(rope, fruit)

  
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  ground.display()
  rope.show()
  ellipse(300,300,15,15)
  Engine.update(engine);
  
   
}




