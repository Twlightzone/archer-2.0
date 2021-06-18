const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;
var arrowC;


function setup() {
  canvas = createCanvas(1920, 600);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(
    300,
    random(450, height - 300),
    180,
    150
      );
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  playerArcher = new PArcher(
    350,
     playerBase.body.position.y- 156,
    120,
    120
  )

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new CArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  //Create an arrow Object
  arrow = new PlayerArrow(
    playerArcher.body.position.x,
    playerArcher.body.position.y,
120,10,(-PI/2)
  )
  arrowC = new ComputerArrow(
    computerArcher.body.position.x,
    computerArcher.body.position.y,
    120,10,-PI/2
  )
  title=createElement('h2');
title.html("This game is really buggy i dont know why but if you press the left or the right arrow key error happens other than that Press Up arrow to see my bad coding skillz ERROR happens dont worry just reload the page")
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


  //Display arrow();
  arrow.display();
  arrowC.display();
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode ==(UP_ARROW)){
    //Call shoot() function and pass angle of playerArcher
    arrow.shoot();
    arrowC.shoot();


  }
}



