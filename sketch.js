var t1 , t2 , t3 , t4 
var j1 , j2 , j3 , j4 
var bg , tom , jerry 

function preload() {
    //load the images here
    t1=loadAnimation("images/tomOne.png")
    t2=loadAnimation("images/tomTwo.png","images/tomThree.png")
    j1=loadAnimation("images/jerryOne.png")
    j2=loadAnimation("images/jerryTwo.png","images/jerryThree.png")
    bg=loadImage("images/garden.png")
    j3=loadAnimation("images/jerryFour.png")
 }

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    tom=createSprite(570,600)
    tom.addAnimation("tomsitting",t1)
    tom.scale=0.1
    jerry=createSprite(170,600)
    jerry.addAnimation("jerrysitting",j1)
    jerry.scale=0.1
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x <  (tom.width-jerry.width)/2){
        tom.velocityX=0
        tom.addAnimation("tomrunning",t1)
        tom.x=270
        tom.changeAnimation("tomrunning",j3) 
        jerry.addAnimation("jerryrunning",j3)
        jerry.x=270
        jerry.changeAnimation("jerryrunning",j3) 
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
{ 
    tom.velocityX = -5; 
    tom.addAnimation("tomr", t2); 
    tom.changeAnimation("tomr"); 
    jerry.addAnimation("jerryTeasing", j2); 
    jerry.frameDelay = 25; 
    jerry.changeAnimation("jerryTeasing"); } 
}


