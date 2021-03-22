var tom,tom_Image,tom_Animation,tom_sitting;
var jerry,jerry_Image,jerry_Animation,jerry_searching;
var garden , gardenImage;

function preload() {
    //loading images 
    tom_Image = loadImage("images/cat1.png");
    jerry_Image = loadImage("images/mouse1.png");
    gardenImage = loadImage("images/garden.png");
    tom_Animation = loadAnimation("images/cat2.png","images/cat3.png");
    tom_sitting = loadAnimation("images/cat4.png");
    jerry_Animation = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry_searching = loadAnimation("Images/mouse4.png");
}

function setup(){
    createCanvas(900,600);
    //creating tom and jerry sprites 
    garden = createSprite(500,300,20,20);
    garden.addImage(gardenImage);
    garden.scale = 0.9;
    tom = createSprite(700,500,30,30);
    tom.addImage("Resting",tom_Image);
    tom.scale = 0.2;
    tom.debug=false;

    jerry = createSprite(200,500,40,40);
    jerry.addImage(jerry_Image);
    jerry.scale = 0.15;
    jerry.debug=false;

}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.addAnimation("catLastImage",tom_sitting);
        tom.changeAnimation("catLastImage");
        tom.velocityX = 0;
        tom.x = 300; 
        tom.y = 470;
        jerry.addAnimation("mouseLastImage",jerry_searching);
        jerry.changeAnimation("mouseLastImage");
    }
    
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("Running",tom_Animation);
        tom.changeAnimation("Running");
        tom.scale = 0.25;
        jerry.addAnimation("smiling",jerry_Animation);
        jerry.changeAnimation("smiling");

    }                                               

  //For moving and changing animation write code here


}
