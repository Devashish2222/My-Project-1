// Intiate gameStates
var START = 0;
var PLAY = 1;
var END = 2;
var gameState = START ;

var boy,boy_img,teacher_img,teacher;
var button1;
var interestinc,interestdec;

function preload()
{
  boy_img = loadAnimation("boy running-0000.png","boy running-0001.png","boy running-0002.png","boy running-0003.png","boy running-0004.png","boy running-0005.png","boy running-0006.png","boy running-0007.png","boy running-0008.png","boy running-0009.png","boy running-0010.png","boy running-0011.png","boy running-0012.png","boy running-0013.png","boy running-0014.png","boy running-0015.png")
}

function setup()
{
 canvas = createCanvas(1000,500);

 boy = createSprite(300,300,5,5);
 boy.addAnimation("running",boy_img);
 boy.scale = 0.5;
 boy.velocityX = 5;

 teacher = createSprite(100,100,5,5);
 //teacher.addAnimation("walking",teacher_img);
 //teacher.scale = 0.5

 interestinc = createSprite(1000,250,10,10);
 interestinc.velocityX = -2;

}

function draw()
{
  background("Pink");

  if(gameState === START){
  fill("Green");
  textSize(25);
  text("Ms.Make Study who is the mentor of Charlie the student likes to teach but Charlie does ",10,100);

  fill("Green");
  textSize(25);
  text("not like to learn at all. So, Can you help Ms.Makestudy successful in helping",10,130);

  fill("Green");
  textSize(25);
  text("Charlie learn coding. Click on Help MakeStudy to help the teacher",10,160);

  //Text on the button
  fill("Orange");
  textSize(20);
  text("Help MakeStudy!",820,450);

  //Button for continuation
  button1 = createSprite(890,450,160,30);
  button1.shapeColor = "White";
  button1.visible = false;

  //Visibility and velocity of Boy
  boy.visible = false;
  boy.velocityX = 0;
  
  //Visiblity and velocity of teacher
  teacher.visible = false;
  teacher.velocityX = 0;  

  interestinc.visible = false;
  interestinc.velocityX = 0;  


 if(mousePressedOver(button1))
 {
   gameState = PLAY;
 }

} else if(gameState == PLAY)
{
   background("Orange");
   boy.visible = true;  
   boy.velocityX = 3;

   teacher.visible = true;
   teacher.velocityX = 1;

   interestinc.visible = true;
   interestinc.velocityX = -4;

   fill("black");
  textSize(10);
  text("I don't want to learn\n CODING",boy.x,boy.y);

  if(interestinc.collide(boy))
  {
    boy.x = boy.x-200;
    interestinc.destroy();
  }
 
   
}
  drawSprites();
}