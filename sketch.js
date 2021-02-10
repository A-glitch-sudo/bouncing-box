var canvas;
var music;
var surface1
var surface2
var surface3
var surface4
var Box

// function preload(){
    music = loadSound("music.mp3");
// }


function setup() {
   
    canvas = createCanvas(1200,600);
    //backGround("Green");
        
    //create 4 different surfaces
    surface1 = createSprite(1000,610,400,50);
    surface1.shapeColor = "yellow";

    surface2 = createSprite(700,610,400,50);
    surface2.shapeColor = "red";

    surface3 = createSprite(450,610,400,50);
    surface3.shapeColor = "blue";

     surface4 = createSprite (250,610,350,50);
     surface4.shapeColor = "green";

 //create box sprite and give velocity
     Box = createSprite(random(20,750));
     Box.shapeColor = "black";
     Box.velocityX = 10
     Box.velocityY = 10

}

function draw() {

    
    background(rgb(169,169,169));
    background(rgb(269,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    Box.bounceOff(edges);                

 if(surface1.isTouching(Box)&& Box.bounceOff(surface1)){
     Box.shapeColor = "yellow";
 }

 if(surface2.isTouching(Box)&& Box.bounceOff(surface2)){
    Box.shapeColor = "red";
}

if(surface3.isTouching(Box)&& Box.bounceOff(surface3)){
    Box.shapeColor = "blue";
}

if(surface4.isTouching(Box)&& Box.bounceOff(surface4)){
    Box.shapeColor = "green";
}


    //add condition to check if box touching surface and make it box

    drawSprites();
}