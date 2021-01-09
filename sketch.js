
//namespacing or nickname
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground,ball;


function setup() {
  createCanvas(400,400);
engine = Engine.create();
//nickname
world=engine.world;

var options  = {
  isStatic: true
}
 ground = Bodies.rectangle(200, 390, 400, 20,options);
World.add(world,ground);


var ballOptions = {

  restitution: 0.5
}

ball = Bodies.circle(200,200,20,ballOptions );
World.add(world,ball);




console.log(ground);
}

function draw() {
  background(0);  
  Engine.update(engine);


rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

}