var score = 0;

function preload() {
   buildingImg = loadImage("sprites/background.jpg");
   zombiesImg = loadImage("sprites/zombie.png");
   manImg = loadImage("sprites/man.png");
}

function setup() {
  createCanvas(1200,600);
  building = createSprite(100,400,100,400);
 
 building.addImage("building",buildingImg);
 building.scale = 2;

 man = createSprite(50,540,30,70);
 man.addImage("man",manImg);  
 // slingshot = new SlingShot(50,100,50,50);
}

function draw() {
  background(0); 


        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
 
   spawnBullets();
   spawnZombies(); 

  drawSprites();
}

 function spawnZombies(){
   if(World.frameCount % 200 === 0) {
         var zombies = createSprite(1150,550,10,50);
         zombies.addImage("zombie",zombiesImg);
         zombies.scale = 0.2;
         zombies.velocityX = -2;
         zombies.lifetime = 540;
         drawSprites();
     }
}

function spawnBullets(){
  if(keyCode === 32){
   var bullet = createSprite(100,530,5,10);
         bullet.velocityX = 5;
         bullet.lifetime = 250;
  }
}