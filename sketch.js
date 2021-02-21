const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        restitution:3
    }

    var ground1={
        isStatic: true
    }

   object= Bodies.rectangle(200,200,20,20,object_options);
    World.add(world,object);
   
    ground= Bodies.rectangle(200,390,400,10,ground1);
    World.add(world,ground);
   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill ("red");
    rect(object.position.x,object.position.y,50,50);
    fill ("blue");
    rect(ground.position.x,ground.position.y,400,10);
}
