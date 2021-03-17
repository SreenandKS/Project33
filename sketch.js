var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var turn = 0;
var gameState = "play";
var particle;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    ground.display();

    
}
 
function mousePressed(){
  if(gameState!=="end"){
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}

function draw() {
  background(random(0,255),random(0,255),random(0,255));
  Engine.update(engine);
 
  if (particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<360){
        score = score+500;
      }
      if(particle.body.position.x>360&&particle.body.position.x<600){
        score = score+100;
      }
      if(particle.body.position.x>600&&particle.body.position.x<900){
        score = score+200;
      }
    }
  }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   textSize(20);
   fill(0);
   text("Score : "+score,20,30);
   text(500,30,700);
   text(500,110,700);
   text(500,190,700);
   text(500,270,700);
   text(100,350,700);
   text(100,430,700);
   text(100,510,700);
   text(200,590,700);
   text(200,670,700);
   text(200,750,700);
}

