var canvas;
var music;
var redbox, bluebox, yellowbox, greenbox, whitebox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
redbox = createSprite(100,600,200,50);
redbox.shapeColor = "red";

bluebox = createSprite(310,600,200,50);
bluebox.shapeColor = "blue";

yellowbox = createSprite(520,600,200,50);
yellowbox.shapeColor = "yellow";

greenbox = createSprite(730,600,200,50);
greenbox.shapeColor = "green";
    //create box sprite and give velocity

whitebox = createSprite(random(20,750),50,30,30);
whitebox.shapeColor = "white";
whitebox.y=World.mouseY;


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    //whitebox.bounceOff(topEdge);
    //whitebox.bounceOff(redbox);
    //whitebox.bounceOff("leftEdge");
    //whitebox.bounceOff(rightEdge);
    if(keyDown("space")){
        whitebox.velocityX=2;
        whitebox.velocityY=3;
        }

    //add condition to check if box touching surface and make it box
if(redbox.isTouching(whitebox) && whitebox.bounceOff(redbox)){
    whitebox.shapeColor = "red";
    music.play();
}
if(bluebox.isTouching(whitebox) && whitebox.bounceOff(bluebox)){
    whitebox.shapeColor = "blue";
    music.play();
}
if(yellowbox.isTouching(whitebox) && whitebox.bounceOff(yellowbox)){
    whitebox.shapeColor = "yellow";
    music.play();
}
if(greenbox.isTouching(whitebox) && whitebox.bounceOff(greenbox)){
    whitebox.shapeColor = "green";
    music.play();
}

if(redbox.isTouching(whitebox)){
    whitebox.shapeColor = rgb(255,128,0);
    whitebox.velocityX=0;
    music.stop();
}
if(bluebox.isTouching(whitebox)){
    whitebox.shapeColor = rgb(255,128,0);
    whitebox.velocityX=0;
    music.stop();
}
if(yellowbox.isTouching(whitebox)){
    whitebox.shapeColor = rgb(255,128,0);
    whitebox.velocityX=0;
    music.stop();
}
if(greenbox.isTouching(whitebox)){
    whitebox.shapeColor = rgb(255,128,0);
    whitebox.velocityX=0;
    music.stop();
}


drawSprites();
}
