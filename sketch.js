var satelitte, satelitteImg;
var earth, earthImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var upLinkLeft,upLinkLeftImg;
var upLinkRight,upLinkRightImg;
var downLinkRight,downLinkRightImg;
var downLinkLeft,downLinkLeftImg;

function preload(){
  satelitteImg = loadImage("satellite.png");
  earthImg = loadImage("other/earth1.png");
  groundStationLeftImg = loadImage("other/gstation1.png")
  groundStationRightImg = loadImage("other/gstation2.png");
  upLinkLeftImg = loadImage("leftu/upleft1.png");
  upLinkRightImg = loadImage("rightu/upright1.png");
  downLinkRightImg = loadImage("rightd/dright1.png");
  downLinkLeftImg = loadImage("leftd/dleft1.png");
}

function setup(){
  createCanvas(700,500);

  satelitte = createSprite(290,130,10,10);
  satelitte.addImage("Satelite",satelitteImg);
  satelitte.scale = 0.9;

  earth = createSprite(300,510,450,250);
  earth.addImage("Tierra",earthImg);
  earth.scale = 0.3;

  groundStationLeft = createSprite(130,338,35,35);
  groundStationLeft.addImage("EstacionIzq",groundStationLeftImg );
  groundStationLeft.scale = 0.04;

  groundStationRight = createSprite(470,338,35,35);
  groundStationRight.addImage("EstacionDer",groundStationRightImg );
  groundStationRight.scale = 0.04;

  upLinkLeft = createSprite(175,265,120,120);
  upLinkLeft.addImage("EnlaceIU",upLinkLeftImg );
  upLinkLeft.scale= 0.03;


  upLinkRight = createSprite(430,265,120,120);  
  upLinkRight.addImage("EnlaceDU",upLinkRightImg );
  upLinkRight.scale= 0.03;


  downLinkLeft = createSprite(175,265,120,120);
  downLinkLeft.addImage("EnlaceDI",downLinkLeftImg );
  downLinkLeft.scale= 0.03;
  downLinkRight = createSprite(430,265,120,120);   downLinkRight.addImage("EnlaceDD",downLinkRightImg );
  downLinkRight.scale= 0.03;


}

function draw(){
  background("black")
  downLinkRight.visible = false;
  downLinkLeft.visible = false;
  upLinkRight.visible = false;
  upLinkLeft.visible = false;
 
  if(keyDown("L")){
    upLinkLeft.visible = true;
  }

  if(keyDown("R")){
    upLinkRight.visible = true;
  } 

  if(keyDown("LEFT_ARROW")){
    downLinkLeft.visible = true;
  }

  if(keyDown("RIGHT_ARROW")){
    downLinkRight.visible = true;
  }

  drawSprites();
  
textSize(15);
fill("white");
text("Presiona las teclas L & R", 5,15);
text("- para solicitar datos del satélite", 5,30);
text("Presiona las teclas de flecha Izquierda y Derecha", 5,50);
text("- para recibir datos del satélite", 5,65);

if (keyDown ("L")){
  text("Solicitando datos del satélite 'Alethya'", 10,300);
}
if (keyDown("R")){

text("Solicitando datos del satelite 'Mia'", 300,300);
}if (keyDown("LEFT_ARROW")){

text("Transfiriendo datos a la estación base Izquierda, 10,300");
   }
if (keyDown ("RIGHT ARROW")){
text("Transfiriendo datos a la estación base Derecha. 490,300");
}

  
}


