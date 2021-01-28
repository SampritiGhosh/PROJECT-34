const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
const Constraint =Matter.Constraint;
var world,engine,monster1img,mon1,monster2img,mon2,bg,hero,ground,box1,box2,
box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,
box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,rope;

function preload() {
bg= loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1500, 800);
  engine=Engine.create();
  world=engine.world;
  
  ///mon1=new Monster(200,200,30,30);
///mon2=new Monster(100,200,30,30);
hero= new Hero (50,400,250,250);
ground= new Ground(600,600,1200,20);
box1= new Block(600,260,50,50);
box2= new Block(600,250,50,50);
box3= new Block(600,240,50,50);
box4= new Block(600,230,50,50);
box5= new Block(600,220,50,50);
box6= new Block(600,210,50,50);
box7= new Block(600,200,50,50);
box8= new Block(600,190,50,50);
box9= new Block(500,180,50,50);
box10= new Block(500,170,50,50);
box11= new Block(500,160,50,50);
box12= new Block(500,150,50,50);
box13= new Block(500,140,50,50);
box14= new Block(500,130,50,50);
box15= new Block(400,120,50,50);
box16= new Block(400,110,50,50);
box17= new Block(400,100,50,50);
box18= new Block(400,90,50,50);
box19= new Block(400,80,50,50);
box20= new Block(400,70,50,50);
box21= new Block(400,60,50,50);
box22= new Block(700,50,50,50);
box23= new Block(700,40,50,50);
box24= new Block (700,30,50,50);
box25= new Block(700,20,50,50);
box26= new Block(700,10,50,50);
rope= new Rope(hero.body,{x:100,y:50});


}
function draw() {
  background(bg);
  Engine.update(engine)
  hero.display();
  ground.display();
  //mon2.display();
  //mon1.display();
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
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
 rope.display();
}
function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
