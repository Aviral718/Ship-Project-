var sea, ship
var seaImage, shipImage1, shipImage2, shipImage3, shipImage4



function preload(){
seaImage   = loadImage("sea.png")
shipImage1 = loadAnimation("ship-1.png")
shipImage2 = loadAnimation("ship-2.png")
shipImage3 = loadAnimation("ship-3.png")
shipImage4 = loadAnimation("ship-4.png")
}

function setup(){
  createCanvas(400,400);
  
sea = createSprite(0,0,400,400)
sea.addImage(seaImage)
sea.scale = 2.4

}

function draw() {
  background(0);
if(sea.x <0){
 sea.x = sea.width/2;
}
drawSprites();
}

function ship1(){
  var ship1 = createSprite(89,98,198,339)
  ship2.addAnimation(shipImage1)
  ship.scale = 2.4;
}
function ship2(){
var ship2 = createSprite(89,98,223,342)
ship2.addAnimation(shipImage2)
ship.scale = 2.4;
}
