var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(800,400);

  speed=random(203,270);
  weight=random(30,52);
  thickness=random(22, 83);

  bullet = createSprite(40,200,50,10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(700,200,thickness, height/2);
  wall.shapeColor = "black"
}

function draw() {
  background(25,255,255); 
  
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if(damage < 10){
      wall.shapeColor = "green";
    }

    if(damage > 10){
      wall.shapeColor = "red";
    }
  }
  drawSprites();
}